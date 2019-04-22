import 'react-toolbox/lib/commons.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { applyRouterMiddleware, IndexRoute, Router, Route, browserHistory } from 'react-router'
import { useScroll } from 'react-router-scroll'

import App from './App.jsx'
import Home from './Home/Home.jsx'
import MonkeyPython from './ProjectPages/MonkeyPython/MonkeyPython.jsx'
import JunkyMonkey from './ProjectPages/JunkyMonkey/JunkyMonkey.jsx'
import FunkCannon from './ProjectPages/FunkCannon/FunkCannon.jsx'
import LegoWorld from './ProjectPages/LegoWorld/LegoWorld.jsx'
import SoftRobot from './ProjectPages/SoftRobot/SoftRobot.jsx'

ReactGA.initialize('UA-56121800-2')

function hashLinkScroll () {
  const { hash } = window.location
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) element.scrollIntoView()
    }, 0)
  }
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

// All routes go through here, using React Router for client side routing
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL} history={browserHistory} onUpdate={hashLinkScroll} render={applyRouterMiddleware(useScroll())}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/monkeypython' component={MonkeyPython} />
      <Route path='/junkymonkey' component={JunkyMonkey} />
      <Route path='/funkcannon' component={FunkCannon} />
      <Route path='/softrobot' component={SoftRobot} />
      <Route path='/legoworld' component={LegoWorld} />
    </Route>
  </Router>
  , document.getElementById('app'))
