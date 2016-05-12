import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// ----------------------------UTIL------------------------------
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function post(url, data, success, error) {
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.timeout = 5000;
        request.ontimeout = error;
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                success(data);
            } else {
                // We reached our target server, but it returned an error
                error();
            }
        };

        request.onerror = function() {
            error();
        };

        request.send(data);
}

function get(url, data, success, error) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.timeout = 5000;
        request.ontimeout = error;
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                success(data);
            } else {
                // We reached our target server, but it returned an error
                error();
            }
        };

        request.onerror = function() {
            error();
        };

        request.send(data);
}
// --------------------------------------------------------------

import { createStore } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';

var ProductBox = React.createClass({
  render: function() {
    var prod = this.props.product;
    return (
      <div className="product-container">
        <Card style={{ width: "200px", margin: "10px", float: "left" }}>
          <CardMedia>
            <img src={ prod.ImageUrl } style={{ height: "200px", objectFit: "cover" }}/>
          </CardMedia>
          <CardTitle>{ prod.Name }</CardTitle>
          <FlatButton label={"Buy - $" + (prod.PriceCents / 100.0) } 
                      style={{ float: "right" }}
                      linkButton={true}
                      href={"https://tabeyo.foxycart.com/cart" +
                            "?name=" + prod.Name +
                            "&price=" + (prod.PriceCents / 100) +
                            "&image=" + prod.ImageUrl }/>
        </Card>
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function() {
    var products = [];
    this.props.products.forEach(function(product){
      products.push(<ProductBox product={product} key={product.Name}/>)
    });
    return (
      <div className="products-list">
        {products}
      </div>
    )
  }
})

get("/Product", null, function(data) {  
  ReactDOM.render(  
    <ProductList products={data} />,
    document.getElementById('content')
  );
});