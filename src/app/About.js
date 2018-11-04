import React from 'react'
import { Card } from 'react-toolbox/lib/card'
import { Row, Col } from 'react-flexbox-grid/lib/'
import theme from '../css/About.scss'
import Container from './Container.js'

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
                <img className={theme.img} src={require('../../img/prof.jpg')} />
              </Col>
              <Col xs={12} md={8}>
                <p className={theme.p}>
                    Srinjoy is a second-year student at the University of Texas at Austin studying Electrical and Computer Engineering.
                    He is a research assistant under Dr. Andrea Thomaz and Dr. Scott Niekum in the Socially Intelligent Machines and Personal
                    Autonomous Robotics Labs. He works on various manipulation and perception related research projects in the Human-Robot
                    Interaction domain. Most recently, he interned on the Software Engineering team at Rubrik Datos IO, where he worked on
                    cloud data protection at scale for big data file systems like Hadoop. He grew up in San Jose, California where he was
                    (and still is!) a huge fan of the Golden State Warriors.
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
