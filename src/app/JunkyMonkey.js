import React, { PropTypes } from 'react';
import { Layout } from 'react-toolbox';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Robot.scss';
import Card from 'react-toolbox/lib/card';
import Container from './Container';

//TODO abstract to common class
class MonkeyPython extends React.Component{

  render(){
    return(
      <div>
        <div className={theme.bg}>
            <Container>
                <h2 className={theme.h2}>Junky Monkey</h2>
                <div className={theme.vidcontainer}>
                  <iframe src="https://www.youtube.com/embed/t28CYJwM4wU" frameborder="0" allowfullscreen></iframe>
                </div>
            </Container>
        </div>
        <Container >
            <Card className={theme.card}>
              <h2>The Game</h2>
              <p>RECYCLE RUSH is a recycling-themed game played by two Alliances of three robots each. Robots score points by stacking totes on scoring platforms, capping those stacks with recycling containers, and properly disposing of pool noodles, representing litter. In keeping with the recycling theme of the game, all game pieces used are reusable or recyclable by teams in their home locations or by FIRST® at the end of the season</p>
              <img className={theme.max_width} src={require("../../img/rrfield.png")}></img>
            </Card>
            <Card className={theme.card}>
              <h2>Stats</h2>
              <Row middle="xs">
                <Col xs={12} md={6}>
                  <ul className={theme.list}>
          <li>Mecanum drivetrain with maximum speed of 12ft/second allowing the robot to move sideways</li>
          <li>Fold out collector for sucking both totes and containers in</li>
          <li>Dual motor Worm Gearbox for stack up totes and containers upto 6 high </li>
          <li>Extendable carriage to deploy stack without driving onto scoring platform</li>

        </ul>
                </Col>
                <Col xs={12} md={6}>
                  <img className={theme.max_width} src={require("../../img/junkymonkeyclose.jpg")}></img>
                </Col>
              </Row>
            </Card>
            <Card className={theme.card}>
              <h2>My Role</h2>
              <p> As a junior, I was in charge of the elevator subsystem on the robot, which consisted of the upper structure, chains, lifting gearbox and counterbalancing. Even though I had used Autodesk Inventor in the past for modeling the control system last year, this was my first project with full subsystem design. Before the season started, I went to the Advanced Design Lectures held by our team mentors, to learn about the math, physics and design behind our robots. This lectures helped me prepare for my job during build season as I had learned the process already. I also held workshops of my own, teaching  rookie members about the electronics subsystem and more advanced tools such as an oscilloscope over several sessions.</p>
              <img className={theme.img_width} src={require("../../img/oscilloscope.jpg")}/>
              <p>During build season, I worked on designing the elevator subsystem. I led a group of around 15 members to prototype conceptual designs for the subsystem. By rapidly producing these prototypes, it was evident which ideas were going to work. For example, here is a test I did with my team to explore stack security ideas early on in the season. We are testing to see if a guide like the pool noodle at the top of the PVC structure would be able to stabilize the container while it is pushed out:</p>
              <div className={theme.vidcontainer}>
                <iframe src="https://www.youtube.com/embed/k1B5vzVRuLs" frameborder="0" allowfullscreen></iframe>
              </div>
            </Card>
            <Card className={theme.card}>
              <h2>Design Highlights</h2>
              <img className={theme.img_lift} src={require("../../img/lift.png")}></img>
            </Card>
            <Card className={theme.card}>
              <h2>Flexible Worm Gearbox</h2>
              <img className={theme.img_gear} src={require("../../img/worm-flexible.png")}></img>
              <p> Our target speed for the lift was 2 ft/sec but I wanted the ability to switch gearing later during the season if the robot needed to go faster or slower. I was able to do this by adding a spur gear reduction between the motor and worm shaft. The two input gears from the motors meshed with a central spur gear. This ratio between the input and central gear, could be changed as long as the sum of the number of teeth was the same. This allowed us to go to a speed of 3 ft/s or even 4 ft/s if we ever needed to. In addition to this, I could also switch out the sprockets on the end of the gearbox for even more combinations, if I needed to fine tune the reduction.</p>
            </Card>
            <Card className={theme.card}>
              <h2>Counterbalancing</h2>
              <img className={theme.img_width} src={require("../../img/counterbalancepic.png")}></img>
              <p> The gearbox was not able to output enough power to lift up a stack of 6 totes and a container by itself. Because of this, we determined that we needed an additional source of force to alleviate the stress on the worm gearbox. To do this, we used a Neg'ator Spring Motor Assembly from SDP-SI that had a spring torque rating of 15.5 lb-in. We decided to use this spring assembly because it worked well on our 2011 robot, which had a similar elevator design.</p>
              <p>While it already provided lots of torque, we needed about 30 lbs of force from the spring motor to be able to lift a full load of 6 totes and a container. We considered ways of increasing the force by attaching the cable through a pulley routed through the carriage, which moves up and down. However, this approach would have taken up a lot of space and put our center of gravity higher, making the robot very easy to tip while driving. Instead, we attached the spring motor directly to a spool on the gearbox shaft so that we could change the size of the spool relative to the sprocket to get more force.</p>
              <p>To determine the size of the spool needed, we started by looking at the torque produced by the main chain on its sprocket. From that, we were able to calculate what sprocket size and force ratio from the worm gearbox output sprocket was needed. After we determined the size of the sprocket on the worm gearbox, we were able to equate that torque to the [ spool diameter x spring force ] equation, giving us a final spool diameter of 3.5 inches and a total counterbalance force of 30 lbs.
              </p>
            </Card>
            <Card className={theme.card}>
              <h2>Chain Tensioning</h2>
              <img className={theme.img_small_width} src={require("../../img/Chain.png")}></img>
              <p> In past years, our team had lots of problems with tensioning chain as the length was never in increments of ¼” and therefore the chain was either too loose or too tight. This year, we used Autodesk Inventor’s parameters and sketches to calculate the total length of the chain in the design so that it fit perfectly. We decided to use idlers on the outside of the chain to reduce backlash from the chains by dividing them up into smaller sections.

         We were also able to change the size of the idler sprockets to change our tensioning level. We did not divide up the idlers in thirds along the travel as they can form nodes that cause more vibration. Using Inventor we were able to solve an age old problem of having chain that was too loose or too tight.</p>

            </Card>

            <Card className={theme.card}>
              <h2>Awards</h2>
              <Row middle="xs">
                <Col xs={12} md={6}>
                  <h3>Orlando Regional</h3>
      <ul className={theme.awlist}>
        <li>Quarter-Finalists</li>
      </ul>
      <h3>Silicon Valley Regional</h3>
      <ul className={theme.awlist}>
        <li>Semi-Finalists</li>
      </ul>
                </Col>
                <Col xs={12} md={6}>
                  <img className={theme.img_width} src={require("../../img/svr2015team.jpg")}/>
                </Col>
              </Row>
            </Card>
        </Container>
      </div>
    );
  }
}
export default MonkeyPython;
