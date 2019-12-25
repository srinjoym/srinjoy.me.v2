import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import ReactGA from 'react-ga'
import Link from 'react-toolbox/lib/link'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Container from '../../Shared/Container/Container.jsx'

import theme from './Landing.scss'

// Landing page with react dipper background
class Landing extends React.Component {
  recordScroll () {
    ReactGA.event({
      category: 'Navigation',
      action: 'Landing Scroll'
    })
  }

  render () {
    return (
      <div className={theme.bg}>
        <div className={theme.headerPadding}>
          <Container id='landing'>
            <h1 className={theme.h1}>Hi! I'm Srinjoy</h1>
            <span className={theme.subtitle}>I'm a Full Stack Developer and Computer Vision Researcher</span>
            <ul className={theme.list}>
              <li><a href='mailto:srinjoy.majumdar@gmail.com'><FaEnvelope /></a></li>
              <li><a href='https://github.com/srinjoym'><FaGithub /></a></li>
              <li><a href='http://www.linkedin.com/pub/srinjoy-majumdar/75/913/345/'><FaLinkedin /></a></li>
              <li><a href='https://twitter.com/SrinjoyMajumdar'><FaTwitter /></a></li>
            </ul>
          </Container>
        </div>
      </div>
    )
  }
}
export default Landing
