import * as React from 'react';

import ProductBox from "../../components/ProductBox/ProductBox";

export default class ProductList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    var products = [];
    if (this.props.products !== undefined) {
      this.props.products.forEach(function(product) {
        products.push(<ProductBox product={product} key={product.Name}/>)
      });
    }
    
    return (
      <div className="products-list">
        {products}
      </div>
    );
  }
  
};