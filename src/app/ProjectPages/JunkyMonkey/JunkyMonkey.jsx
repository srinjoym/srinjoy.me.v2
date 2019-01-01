import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import theme from './JunkyMonkey.scss'
import Card from 'react-toolbox/lib/card'
import Container from '../../Shared/Container/Container.jsx'
import Content from "./JunkyMonkey.md"

// TODO abstract to common class
class JunkyMonkey extends React.Component {
  render () {
    return (
      <div>
        <div className={theme.bg}>
        <Container>
          <Row className={theme.overview}>
            <Col xs={12} sm={7}>
              <h2 className="pb-0 mt-1">Junky Monkey</h2>
              <h4>FIRST Robotics Competition Robot</h4>

              <h3 className="mt-4">Overview</h3>
              <p className="mt-2">
              In my junior year of High School, I served as the Vice President of our robotics team and helped design Junky Monkey for
              the 2015 FRC Game - Recycle Rush. Junky Monkey's purpose was to pick up shipping totes and recycling bins to make stacks
              up to 6ft high! I designed and built the elevator subsystem which consisted of a custom gearbox to lift up the containers.
              </p>
            </Col>
            <Col xs={12} sm={3} smOffset={1}>
              <img className={theme.overview_image} src={require('../../../../img/junkymonkey_logo.png')}></img>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
          <Row className={theme.content}>
            <Col xs={9}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default JunkyMonkey
