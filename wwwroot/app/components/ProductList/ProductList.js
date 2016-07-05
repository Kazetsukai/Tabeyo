import * as React from 'react';

import ProductBox from "../ProductBox/ProductBox";
import Hako from "../Hako/Hako"

export default class ProductList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    var products = [];
    if (this.props.products !== undefined) {
      this.props.products.forEach(function(product) {
        products.push(<ProductBox product={product} key={product.name}/>)
      });
    }
    
    return (
      <div className="products-list clearfix">
        {products}
      </div>
    );
  }
  
};