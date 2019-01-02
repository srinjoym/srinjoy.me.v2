import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import Card from 'react-toolbox/lib/card'

import theme from './SoftRobot.scss'
import Container from '../../Shared/Container/Container.jsx'
import Content from "./SoftRobot.md"

class SoftRobot extends React.Component {
  render () {
    return (
      <div>
        <div className={theme.bg}>
          <Container>
              <Row className={theme.overview}>
                <Col xs={12} sm={7}>
                  <h2 className="pb-0 mt-1">Soft Robot Gripper</h2>
                  <h4>Pneumatic Flexible Gripper</h4>

                  <h3 className="mt-4">Overview</h3>
                  <p className="mt-2">
                  I designed a soft pneumatic gripper in my senior year of high school to explore making robots
                  more approachable. The gripper can pick up an object in any orientation as it conforms
                  to the object’s shape while maintaining a constant grip. Not only is it a better performer that a traditional
                  two finger gripper, but it also reduces the risk of injury for humans interacting with the robot significantly. 
                  I 3D modeled the gripper mold based on pneumatic simulations and molded it using EcoFlex.
                  </p>
                </Col>
                <Col xs={12} sm={3} smOffset={1}>
                  <img className={theme.overview_image} src={require('../../../../img/base_card.png')}></img>
                </Col>
              </Row>
            </Container>
        </div>

        <Container>
          <Row className={theme.content}>
            <Col xs={12} md={9}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default SoftRobot
