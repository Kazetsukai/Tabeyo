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
            <a className="product-box__image-link" href={"product/" + prod.id }>
              <img className="product-box__image-link__image" src={ prod.imageUrl }/>
            </a>
          </div>
          <div className="product-box__name">{ prod.name }</div>
          <a className="product-box__buy-button button"
             href={"https://tabeyo.foxycart.com/cart" +
                   "?name=" + prod.name +
                   "&price=" + (prod.priceCents / 100) +
                   "&image=" + prod.imageUrl }>
            {"Buy - $" + (prod.priceCents / 100.0).toFixed(2) }
          </a>
        </div>
      </div>
    );
  }
  
};