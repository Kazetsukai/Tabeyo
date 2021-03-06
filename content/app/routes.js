import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Page from './components/Page/Page'
import About from './components/About/About'
import RecipeList from './components/RecipeList/RecipeList'
import ProductListContainer from './containers/ProductListContainer'
import ProductPageContainer from './containers/ProductPageContainer'

export default (
  <Route path="/construction" component={Page}>
    <IndexRoute component={ProductListContainer} />
    <Route path="product/:id" component={ProductPageContainer} />
    <Route path="about" component={About} />
    <Route path="recipes" component={RecipeList} />
  </Route>
)