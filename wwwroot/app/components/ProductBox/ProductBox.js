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
            <img className="product-box__image" src={ prod.ImageUrl }/>
          </div>
          <div className="product-box__name">{ prod.Name }</div>
          <a className="product-box__buy-button"
             href={"https://tabeyo.foxycart.com/cart" +
                   "?name=" + prod.Name +
                   "&price=" + (prod.PriceCents / 100) +
                   "&image=" + prod.ImageUrl }>
            {"Buy - $" + (prod.PriceCents / 100.0) }
          </a>
        </div>
      </div>
    );
  }
  
};