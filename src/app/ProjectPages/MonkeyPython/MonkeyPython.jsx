import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import theme from './MonkeyPython.scss'
import Card from 'react-toolbox/lib/card'
import Container from '../../Shared/Container/Container.jsx'
import Content from "./MonkeyPython.md"

class MonkeyPython extends React.Component {
  render () {
    return (
      <div>
        <div className={theme.bg}>
          <Container>
            <Row className={theme.overview}>
              <Col xs={12} sm={7}>
                <h2 className="pb-0 mt-1">Monkey Python</h2>
                <h4>FIRST Robotics Competition Robot</h4>

                <h3 className="mt-4">Overview</h3>
                <p className="mt-2">
                I served as the Co-President of our robotics team in my final year of high school. In addition to
                managing day to day operations, I helped build our robot Monkey Python for the 2016 FRC game Stronghold.
                The robots purpose was to shoot foam dodge balls (known as boulders) into goals and cross various types
                of rough terrain challenges. I oversaw the overall design of the robot and designed the robots boulder
                intake mechanism.
                </p>
              </Col>
              <Col xs={12} sm={3} smOffset={1}>
                <img className={theme.overview_image} src={require('../../../../img/monkeypython_logo.png')}></img>
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
export default MonkeyPython
