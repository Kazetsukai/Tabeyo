import * as React from 'react';

import ProductListContainer from "../../containers/ProductListContainer";
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
            <ProductListContainer />
        </div>
      </div>
    );
  }
  
};