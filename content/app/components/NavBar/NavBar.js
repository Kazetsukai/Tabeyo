import * as React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <nav className="nav-bar">
        <Link className="nav-bar__link" to="/construction/">Start shopping!</Link>
        <Link className="nav-bar__link" to="/construction/recipes">Recipes</Link>
        <Link className="nav-bar__link" to="/construction/about">About us</Link>
      </nav>
    );
  }
  
};