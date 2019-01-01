import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'

import theme from './FunkCannon.scss'
import Container from '../../Shared/Container/Container.jsx'
import Content from "./FunkCannon.md"

class FunkCannon extends React.Component {
  render () {
    return (
      <div>
        <div className={theme.bg}>
          <Container>
            <Row className={theme.overview}>
              <Col xs={12} sm={7}>
                <h2 className="pb-0 mt-1">Funk Cannon</h2>
                <h4>FIRST Robotics Competition Robot</h4>

                <h3 className="mt-4">Overview</h3>
                <p className="mt-2">
                Funk Cannon was the 2014 robot for Lynbrook Robotics. The robots purpose was to work with other robots and shoot large 20″ diameter exercise balls into goals. As a sophomore, I led both the electrical and pneumatic and subsystems on the robot. This robot was by far the most successful in the teams history, winning two events and numerous awards.
                </p>
              </Col>
              <Col xs={12} sm={3} smOffset={1}>
                <img className={theme.overview_image} src={require('../../../../img/funkcannon_logo.png')}></img>
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
export default FunkCannon
