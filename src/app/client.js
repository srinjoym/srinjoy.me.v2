import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './Home.js';
import { IndexRoute,Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
  </Route>
  </Router>
, document.getElementById('app'));
