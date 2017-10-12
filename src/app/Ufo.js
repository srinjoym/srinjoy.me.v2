import React, { PropTypes } from 'react';
import { Layout } from 'react-toolbox';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Robot.scss';
import Card from 'react-toolbox/lib/card';
import Container from './Container';

class Ufo extends React.Component{

  render(){
    return(
      <div>
        <div className={theme.bg}>
            <Container>
                <h2 className={theme.h2}>Ultimate Funky Object</h2>
                <div className={theme.vidcontainer}>
                  <iframe src="http://www.youtube.com/embed/yCBjZ0s0kAo" frameborder="0" allowfullscreen></iframe>
                </div>
            </Container>
        </div>
        <Container >
            <Card className={theme.card}>
              <h2>The Game</h2>
              <p>Ultimate Ascent is played between two alliances of three teams each. During the match, each scores by throwing discs into 3 levels of slots during the 2-minute and 15-second match. Discs scored in higher slots score Alliances more points. Bonus points are awarded if alliances climb up a pyramid at the end of the match. The pyramid has three rungs worth more points based on level of ascent at the end of the match. It also contains a goal at the peak worth extra points.</p>
              <img className={theme.max_width} src={require("../../img/ultimatefield.png")}></img>
            </Card>
            <Card className={theme.card}>
              <h2>Stats</h2>
              <Row middle="xs">
                <Col xs={12} md={6}>
                  <ul  className={theme.list}>
      <li>6 wheel drivetrain with PTO(power take-off) gearbox with a maximum speed of 15.7ft/second</li>
      <li>Collector to suck frisbees in from ground wrapped in tennis grip tape.</li>
      <li>Linear shooter with two rollers for shot reliability. Entire superstructure actuates for close and mid-range shots.</li>
      <li>Climber pulls up robot to 2nd level in 15 seconds with a combination of motors from drivetrain and pneumatics.</li>

          </ul>
                </Col>
                <Col xs={12} md={6}>
                  <img className={theme.max_width} src={require("../../img/ufo_card.png")}></img>
                </Col>
              </Row>
            </Card>
            <Card className={theme.card}>
              <h2>My Role</h2>
              <p> As a freshman, I spent most of the year learning the different aspects of FIRST robotics. I went to both the CAD and software workshops so that I could contribute meaningfully during build season. After the workshops, I was very interested in the electronics of the robot. After doing more research, I presented with the team at the Western Region Robotics Forum Workshops to over 150 people on the basics of electrical system of the robot.After that, I helped the team wire and maintain the robot. During this time, I mainly focused on learning the system so I could lead the effort the next season. I also helped write and present the Entrepreneurship Award at Calgames which we ended up winning.</p>
              <img className={theme.img_width} src={require("../../img/ufohang.jpg")}></img>
            </Card>
            <Card className={theme.card}>
              <h2>Awards</h2>
              <Row middle="xs">
                <Col xs={12} md={6}>
                  <h3>Boston Regional</h3>
            <ul className={theme.awlist}>
              <li>Regional Finalists</li>
              <li>Engineering Inspiration Award</li>
            </ul>
            <h3>Silicon Valley Regional</h3>

            <ul className={theme.awlist}>
              <li>Imagery Award in honor of Jack Kamen</li>
            </ul>
            <h3>World Championships</h3>
            <h3>Calgames</h3>

            <ul className={theme.awlist}>
              <li>Entrepreneurship Award</li>
              <li>CAD Award Runners-Up</li>
            </ul>
            <h3>MadTown Throwdown</h3>

            <ul className={theme.awlist}>
              <li>WOW Factor Award</li>
            </ul>
                </Col>
                <Col xs={12} md={6}>
                  <img className={theme.img_width} src={require("../../img/team2013.jpg")}/>
                </Col>
              </Row>
            </Card>
        </Container>
      </div>
    );
  }
}
export default Ufo;
