import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


import { createStore } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

var ProductBox = React.createClass({
  render: function() {
    return (
      <div className="product-container">
        <Card style={{ width: "200px", margin: "10px" }}>
          <CardMedia>
            <img src={ this.props.imageUrl } style={{ height: "200px", objectFit: "cover" }}/>
          </CardMedia>
          <CardTitle>{ this.props.name } - { this.props.price }</CardTitle>
        </Card>
      </div>
    );
  }
});

ReactDOM.render(
  <ProductBox imageUrl="https://tabeyoprodstore.blob.core.windows.net/tabeyo-images/soy_sauce_250ml.jpg" name="Soy Sauce 300ml" price="$5.30" />,
  document.getElementById('content')
);