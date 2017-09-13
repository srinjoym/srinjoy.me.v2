import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './Home.js';
import MonkeyPython from './MonkeyPython.js';
import JunkyMonkey from './JunkyMonkey.js';
import FunkCannon from './FunkCannon.js';
import Ufo from './Ufo.js';
import SoftRobot from './SoftRobot.js';
import ReactGA from 'react-ga';
import { applyRouterMiddleware,IndexRoute,Router, Route, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
// import useScroll from 'scroll-behavior/lib/useStandardScroll';

ReactGA.initialize('UA-56121800-2');

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


ReactDOM.render(
  <Router history={browserHistory}  onUpdate={hashLinkScroll} render={applyRouterMiddleware(useScroll())}>
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/monkeypython' component={MonkeyPython}/>
    <Route path='/junkymonkey' component={JunkyMonkey}/>
    <Route path='/funkcannon' component={FunkCannon}/>
    <Route path='/ufo' component={Ufo}/>
    <Route path='/softrobot' component={SoftRobot}/>
  </Route>
  </Router>
, document.getElementById('app'));
