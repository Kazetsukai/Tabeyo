import * as React from 'react';


export default class ProductPage extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    var prod = this.props.product;
    if (prod === undefined) {
      return (<div></div>);
    }

    return (
      <div>
        <img className="product-page__product-image" src={prod.imageUrl} />
        <div className="product-page__product-description">
          <h2>{prod.name}</h2>
          <p>This is a product page. For product ID: {prod.id}</p>
        </div>
      </div>
    );
  }
  
};