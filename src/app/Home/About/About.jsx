import React from 'react'
import { Card } from 'react-toolbox/lib/card'
import { Row, Col } from 'react-flexbox-grid/lib/'

import theme from './About.scss'
import Container from '../../Shared/Container/Container.jsx'

// About component on home page
class About extends React.Component {
  render () {
    return (
      <div className={theme.bg}>
        <Container id='about'>
          <Card className={theme.cardOv}>
            <h2>Who Am I?</h2>
            <Row middle='xs' center='xs'>
              <Col xs={12} md={4}>
                <img className={theme.img} src={require('../../../../img/prof.jpg')} />
              </Col>
              <Col xs={12} md={8}>
                <p className={theme.p}>
                  I'm a software engineer and computer vision researcher working at Microsoft Cognition in Seattle, WA.
                  This past year, I graduated from the University of Texas at Austin with a degree in Electrical and Computer Engineering.
                  While there, I conducted computer vision research in the Human-Robot Interaction domain under Dr. Andrea Thomaz and Dr. Scott Niekum.
                  Previously, I worked as a full-stack software intern at GitHub developing products in education and social networking.
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    )
  }
}
export default About
