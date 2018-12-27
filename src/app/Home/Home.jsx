import React from 'react'
import Landing from './Landing/Landing.jsx'
import About from './About/About.jsx'
import Experience from './Experience/Experience.jsx'
import Projects from './Projects/Projects.jsx'
import Research from './Research/Research.jsx'
import Awards from './Awards/Awards.jsx'

// Renders all sub components of Home page.
class Home extends React.Component {
  render () {
    return (
      <div>
        <Landing />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Awards />
      </div>
    )
  }
}

export default Home
