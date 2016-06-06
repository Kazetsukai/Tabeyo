import * as React from 'react';

export default class ProductBox extends React.Component {
  
  constructor(props) {
    super(props);
    this.product = props.product;
  }
  
  render() {
    var prod = this.product;
    return (
      <div className="product-box">
        <div>
          <div>
            <img src={ prod.ImageUrl } style={{ height: "200px", objectFit: "cover" }}/>
          </div>
          <div>{ prod.Name }</div>
          <div label={"Buy - $" + (prod.PriceCents / 100.0) } 
                      style={{ float: "right" }}
                      linkButton={true}
                      href={"https://tabeyo.foxycart.com/cart" +
                            "?name=" + prod.Name +
                            "&price=" + (prod.PriceCents / 100) +
                            "&image=" + prod.ImageUrl }/>
                            
        </div>
      </div>
    );
  }
  
};