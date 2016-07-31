import * as React from 'react';
import NavBar from "../../components/NavBar/NavBar";

export default class Cart extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <p className="cart" data-fc-id="minicart">
	      <a href="https://tabeyo.foxycart.com/cart?cart=view">
          <img className="cart__icon" src="/img/cart.png" />
          <span className="cart__count" data-fc-id="minicart-quantity">0</span>
        </a>
      </p>
    );
  }
  
};