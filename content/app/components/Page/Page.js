import * as React from 'react';

import ProductListContainer from "../../containers/ProductListContainer";
import MainHeader from "../../components/MainHeader/MainHeader";

export default class Page extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div>
        <MainHeader />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
  
};