import * as React from 'react';

export default class Hako extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div className="hako">
        {this.props.children}
      </div>
    );
  }
  
};