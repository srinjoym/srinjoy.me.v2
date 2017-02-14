import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './Home.js';
import MonkeyPython from './MonkeyPython.js';
import JunkyMonkey from './JunkyMonkey.js';
import FunkCannon from './FunkCannon.js';
import Ufo from './Ufo.js';
import { IndexRoute,Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/monkeypython' component={MonkeyPython}/>
    <Route path='/junkymonkey' component={JunkyMonkey}/>
    <Route path='/funkcannon' component={FunkCannon}/>
    <Route path='/ufo' component={Ufo}/>
  </Route>
  </Router>
, document.getElementById('app'));
