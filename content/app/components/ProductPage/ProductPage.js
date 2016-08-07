import * as React from 'react';


export default class ProductPage extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div>
        This is a product page. For product ID: {this.props.params.id}
      </div>
    );
  }
  
};