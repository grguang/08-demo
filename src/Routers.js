import React, { PropTypes } from 'react'
import { Router, Route, hashHistory ,IndexRoute} from 'react-router';

import App from './App.js';
import Home from './Home/index.js'
import Blog from './Blog/index.js'
import Work from './Work'
import About from './About'
import Nomatch from './component/Nomatch.js'
import Item from './Item/index.js'

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path="blog" component={Blog} />
          <Route path="work" component={Work} />
          <Route path="about" component={About} />
          <Route path="item/:title" component={Item} />
          <Route path='*' component={Nomatch} />
        </Route>
      </Router>
    )
  }
}

export default Routers;
