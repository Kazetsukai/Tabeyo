import * as React from 'react';

import ProductList from "../../components/ProductList/ProductList";
import MainHeader from "../../components/MainHeader/MainHeader";

export default class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div>
      
        <MainHeader />
        
        <div className="container">
            <ProductList />
        </div>
        
      </div>
    );
  }
  
};