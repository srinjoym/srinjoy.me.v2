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
                  I’m interested in solving some of the world’s biggest problems.
                  To do that, I’m currently learning from some of the brightest at the University of Texas at Austin,
                  where I am studying Electrical and Computer Engineering. Most recently, I’ve been tackling the issue
                  of quality programming education as a Junior Software Developer at GitHub. I’m also working on solving
                  novel Augmented Reality and Human-Robot Interaction problems under Dr. Andrea Thomaz and Dr. Scott Niekum.
                  I grew up in San Jose California, but I’m hoping I’m able to make people’s lives all over the world better
                  in the future.
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
