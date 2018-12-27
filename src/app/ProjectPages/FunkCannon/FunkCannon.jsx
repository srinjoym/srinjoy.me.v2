import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import theme from '../Robot.scss'
import Card from 'react-toolbox/lib/card'
import Container from '../../Shared/Container/Container.jsx'

// Page with details for FunkCannon, TODO abstract out to data, and move to modals
class FunkCannon extends React.Component {
  render () {
    return (
      <div>
        <div className={theme.bg}>
          <Container>
            <h2 className={theme.h2}>Funk Cannon</h2>
            <div className={theme.vidcontainer}>
              <iframe src='http://www.youtube.com/embed/6LP_wzg0UKI' frameBorder='0' allowFullScreen />
            </div>
          </Container>
        </div>
        <Container >
          <Card className={theme.card}>
            <h2>The Game</h2>
            <p>AERIAL ASSIST is played by two competing Alliances of three robots each on a flat 25’ x 54’ foot field, straddled by a truss suspended just over five feet above the floor. The objective is to score as many balls in goals as possible during a two (2)-minute and 30-second match. The more Alliances score their ball in their goals, and the more they work together to do it, the more points their Alliance receives.</p>
            <img className={theme.max_width} src={require('../../../../img/field.png')} />
          </Card>
          <Card className={theme.card}>
            <h2>Stats</h2>
            <Row middle='xs'>
              <Col xs={12} md={6}>
                <ul className={theme.list}>
                  <li>6 wheel drivetrain with maximum speed of 16.3ft/second</li>
                  <li>Collector to suck balls in from ground</li>
                  <li>Shooter consists of two large springs allowing for shooting anywhere in the goal zone</li>
                  <li>During the autonomous period, the Funk Cannon is capable of rapidly shooting two balls within 8 seconds, scoring 45 points by itself.</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <img className={theme.max_width} src={require('../../../../img/funkcannon.png')} />
              </Col>
            </Row>
          </Card>
          <Card className={theme.card}>
            <h2>My Role</h2>
            <p> As a sophomore, I was in charge of both the electrical and pneumatics subsystems on the robot. These two subsystems had been the main sources of failure on the robot last year(Ultimate Funky Object). To increase the reliability for this bot, I used Autodesk Inventor to model the control system during the design period. Traditionally, our team only models the mechanical aspects of the robot, this was the first year that the entire system of the robot was modeled beforehand. Not only was this the first time our team had ever done it, but it was also very rare among other FIRST teams. This approach solved the issues of reliabilty and robustness from previous years and its creativity impressed many judges and led to many awards.</p>
            <img className={theme.img_small_width} src={require('../../../../img/baseboard.png')} />
            <p>After I modeled the control system, I led a group of around 15 students to use the model as a guide and wire the electronics on this robot. I worked on wiring the required Kit Of Parts(KOP) electronics system as well as more advanced circuits such as a continous potentiometer that was used to sense the position of the shooter and a hall effect sensor that was used to detect the speed of the collector. I also worked on wiring and programming the LEDS on our robot using the Intel Galileo prototyping boards which we received as a gift from Lynbrook alumni Brian Krzanich himself! </p>
            <img className={theme.img_width} src={require('../../../../img/intel.jpg')} />
          </Card>
          <Card className={theme.card}>
            <h2>Awards</h2>
            <Row middle='xs'>
              <Col xs={6}>
                <h3>Buckeye Regional</h3>
                <ul className={theme.awlist}>
                  <li>Regional Winners</li>
                  <li>Creativity Award sponsored by Xerox</li>
                </ul>
                <h3>Silicon Valley Regional</h3>

                <ul className={theme.awlist}>
                  <li>Quality Award sponsored by Motorola</li>
                </ul>
                <h3>World Championships</h3>
                <ul className={theme.awlist}>
                  <li>Highest Offensive Power Ranking</li>
                </ul>
                <h3>Chezy Champs</h3>
                <ul className={theme.awlist}>
                  <li>Finalists</li>
                  <li>Most Improved Team Award</li>
                </ul>
                <h3>Calgames</h3>
                <ul className={theme.awlist}>
                  <li>Winners</li>
                  <li>Computer Aided Design Award</li>
                </ul>
              </Col>
              <Col xs={6}>
                <img className={theme.img_width} src={require('../../../../img/team.jpg')} />
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    )
  }
}
export default FunkCannon
