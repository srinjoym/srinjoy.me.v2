import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import ReactGA from 'react-ga'
import Link from 'react-toolbox/lib/link'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

import theme from './Landing.scss'
import ScrollLink from '../../Shared/ScrollLink/ScrollLink.jsx'
import ParticleConfig from './dipper_config.json'

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
        <a id='landing' />
        <section className={theme.section}>
          <Row middle='xs'>
            <Col className={theme.maxWidth} xs={11}>
              <h1 className={theme.h1}>Hi! I'm Srinjoy</h1>
              <span className={theme.h2}>Full Stack Developer and Computer Vision Researcher</span>
              <ul className={theme.list}>
                <li><a href='mailto:srinjoy.majumdar@gmail.com'><FaEnvelope /></a></li>
                <li><a href='https://github.com/srinjoym'><FaGithub /></a></li>
                <li><a href='http://www.linkedin.com/pub/srinjoy-majumdar/75/913/345/'><FaLinkedin /></a></li>
                <li><a href='https://twitter.com/SrinjoyMajumdar'><FaTwitter /></a></li>
              </ul>
            </Col>
          </Row>
          <ScrollLink onClick={this.recordScroll.bind(this)} path='/' id='about'><Link className={theme.bounce} href='' icon='keyboard_arrow_down' /></ScrollLink>
        </section>
      </div>
    )
  }
}
export default Landing
