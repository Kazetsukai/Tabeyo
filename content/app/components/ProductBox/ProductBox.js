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
            <img className="product-box__image" src={ prod.imageUrl }/>
          </div>
          <div className="product-box__name">{ prod.name }</div>
          <button className="product-box__buy-button"
             href={"https://tabeyo.foxycart.com/cart" +
                   "?name=" + prod.name +
                   "&price=" + (prod.priceCents / 100) +
                   "&image=" + prod.imageUrl }>
            {"Buy - $" + (prod.priceCents / 100.0) }
          </button>
        </div>
      </div>
    );
  }
  
};