import * as React from 'react';
import { Link } from 'react-router';

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
            <Link className="product-box__image-link"  to={"/construction/product/" + prod.id}>
              <div className="product-box__image-link__image" style={{ backgroundImage: "url(" + prod.imageUrl + ")" }}/>
            </Link>
          </div>
          <div className="product-box__name">{ prod.name }</div>
          <a className="product-box__buy-button button"
             href={"https://tabeyo.foxycart.com/cart" +
                   "?name=" + prod.name +
                   "&price=" + (prod.priceCents / 100) +
                   "&image=" + prod.imageUrl }>
            {"Add to cart - $" + (prod.priceCents / 100.0).toFixed(2) }
          </a>
        </div>
      </div>
    );
  }
  
};