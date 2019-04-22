import React from 'react'
import theme from './Footer.scss'
import { Row, Col } from 'react-flexbox-grid/lib/'
import Container from '../Shared/Container/Container.jsx'
import { GithubIcon, LinkedInIcon, EmailIcon } from '../Shared/Icons'

class Footer extends React.Component {
  render () {
    return (
      <div className={theme.footer}>
        <Container>
          <Row middle='xs'>
            <Col xs={12} md={6}>
              <h2 className={theme.black}>{"Let's get in touch!"}</h2>
            </Col>
            <Col xs={12} md={6}>
              <ul className={theme.list}>
                <li><a href='mailto:srinjoy.majumdar@gmail.com'><EmailIcon /></a></li>
                <li><a href='https://github.com/srinjoym'><GithubIcon /></a></li>
                <li><a href='http://www.linkedin.com/pub/srinjoy-majumdar/75/913/345/'><LinkedInIcon /></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer
