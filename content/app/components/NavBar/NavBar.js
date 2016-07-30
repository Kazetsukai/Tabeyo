import * as React from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <nav className="nav-bar">
        <IndexLink className="nav-bar__link" activeClassName="nav-bar__link_active" to="/construction/">Start shopping!</IndexLink>
        <Link className="nav-bar__link" activeClassName="nav-bar__link_active" to="/construction/recipes">Recipes</Link>
        <Link className="nav-bar__link" activeClassName="nav-bar__link_active" to="/construction/about">About us</Link>
      </nav>
    );
  }
  
};