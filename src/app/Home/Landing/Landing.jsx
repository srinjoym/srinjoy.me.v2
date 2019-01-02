import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import ReactGA from 'react-ga'
import Link from 'react-toolbox/lib/link'
import ReactDipper from 'react-dipper'
import Tooltip from 'react-toolbox/lib/tooltip'

import theme from './Landing.scss'
import ScrollLink from '../../Shared/ScrollLink/ScrollLink.jsx'
import { GithubIcon, LinkedInIcon, EmailIcon } from '../../Shared/Icons.jsx'
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
        <div className={theme.particles}>
          <ReactDipper particleParams={ParticleConfig} />
        </div>
        <a id='landing' />
        <section className={theme.section}>
          <Row middle='xs'>
            <Col className={theme.maxWidth} xs={11}>
              <h1 className={theme.h1}>Hi! I'm Srinjoy</h1>
              <h2 className={theme.h2}>Full Stack Developer and Computer Vision Researcher</h2>
              <ul className={theme.list}>
                <li><a href='mailto:srinjoy.majumdar@gmail.com'><EmailIcon /></a></li>
                <li><a href='https://github.com/srinjoym'><GithubIcon /></a></li>
                <li><a href='http://www.linkedin.com/pub/srinjoy-majumdar/75/913/345/'><LinkedInIcon /></a></li>
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
