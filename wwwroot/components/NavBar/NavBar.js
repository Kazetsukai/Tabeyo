import * as React from 'react';

export default class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <nav className="nav-bar">
        <a className="nav-bar__link" href="#">Start shopping!</a>
        <a className="nav-bar__link" href="#">Recipes</a>
        <a className="nav-bar__link" href="#">Contact us</a>
      </nav>
    );
  }
  
};