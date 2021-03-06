import * as React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Cart from "../../components/Cart/Cart";

export default class MainHeader extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <header className="main-header">
        <div className="container">
            <img className="main-header__logo" src="/img/logo.png" />
            <NavBar />
            <Cart />
        </div>
      </header>
    );
  }
  
};