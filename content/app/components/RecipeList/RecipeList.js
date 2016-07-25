import * as React from 'react';

export default class RecipeList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div>
        Recipe list!
        <ul>
        <li>Recipe for bananas</li>
        <li>How to extract the best bits of a fish</li>
        <li>12 exciting uses for soy sauce you won't believe!</li>
        </ul>
      </div>
    );
  }
  
};