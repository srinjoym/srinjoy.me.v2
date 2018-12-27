import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import theme from '../Robot.scss'
import Card from 'react-toolbox/lib/card'
import Container from '../../Shared/Container/Container.jsx'

class MonkeyPython extends React.Component {
  render () {
    return (
      <div>
        <div className={theme.bg}>
          <Container>
            <h2 className={theme.h2}>Monkey Python</h2>
              <div className={theme.vidcontainer}>
                <iframe src='https://www.youtube.com/embed/5HujZl5uKcE' frameBorder='0' allowFullScreen />
              </div>
          </Container>
        </div>
        <Container >
          <Card className={theme.card}>
            <h2>The Game</h2>
            <p>FIRST STRONGHOLD is played by two alliances of three teams each. Alliances compete against each other to breach their opponents’ defenses, known as outer works, and capture their tower. They score points by crossing elements of their opponents’ outer works, scoring boulders in their opponents’ tower goals, and surrounding and scaling their opponents’ tower itself.</p>
            <img className={theme.max_width} src={require('../../../../img/stronghold.png')} />
          </Card>
          <Card className={theme.card}>
            <h2>Stats</h2>
            <Row middle='xs'>
              <Col xs={12} md={6}>
                <ul className={theme.list}>
                  <li>Entire robot can fold down to 15in to fit under low bar.</li>
                  <li>High Shooter to shoot into tower over defenders.</li>
                  <li>Mecanum collector with wide intake range and defense manipulator.</li>
                  <li>10 wheel pneumatic wheel drive train for rough terrain.</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <img className={theme.max_width} src={require('../../../../img/mp_close.jpg')} />
              </Col>
            </Row>
          </Card>
          <Card className={theme.card}>
            <h2>Design Highlights</h2>
            <img className={theme.img_width} src={require('../../../../img/intake.jpg')} />
            <p>I considered intaking the boulders both over and through the front bumpers. After analyzing the geometry for both systems, I realized that an over-the-bumper intake would not have a position extending under 15 inches outside the robot, thus not meeting our first requirement. However, the through bumper design required us to split our drivetrain frame, making it weaker. So I combined the two designs and decided to intake over our frame while still splitting the bumpers. As a result, I maintained a position under 15 inches and a rigid drive base.</p>
            <img className={theme.img_width} src={require('../../../../img/bumper.png')} />
          </Card>
          <Card className={theme.card}>
            <h2>Why Mecanum Wheels?</h2>
            <img className={theme.img_width} src={require('../../../../img/mecanum.png')} />
            <p>After successfully using mecanums on our 2014 intake to funnel the balls into the center of the robot, I decided to once again use mecanums on our intake this year to funnel in the boulders. Initially, I mounted these wheels on our intake in combination with a polycarb funnel to pull in boulders over a wider range. After running several tests on our intake, Ifound that the mecanum wheels were not effective in funneling the boulders if they were not positioned against a rigid surface. The intake ended up jamming the boulder on the sides of the polycarb funnel. To solve this problem, I moved our mecanum wheels from the outer shaft to the inner shaft so that the boulders would be in contact with the bumpers and the mecanum wheels when collecting from the side. With this new design, I maintained both the extended reach and the ability to collect from the corners of the robot.</p>
          </Card>
          <Card className={theme.card}>
            <h2>Intake Arm Gearbox</h2>
            <img className={theme.img_width} src={require('../../../../img/bevelgearbox.png')} />
            <p>To defeat the defenses, I needed to control the intake’s speed and position at multiple points, which would have been hard to achieve with a pneumatic cylinder. As a result, I decided to design our own gearbox to move the intake arm. Initially, I tried a design with the motor mounted inline with the intake arm’s axis of rotation. However, I found that with this configuration the motor did not fit inside our frame perimeter. I therefore decided to use bevel gears to mount the motor perpendicular to the arm’s axis of rotation which would keep it from interfering with the bumpers. I stripped the bevel gears on the intake arm gearbox early in our testing when the software team ran the intake past its soft limit. Before replacing the gears, I decided to analyze the strength of the gears to ensure that they would not fail under normal operation. I were surprised to discover that the brass material on the bevel gears was actually weaker than the surface treated 7075 Aluminum spur gears. Additionally, the bevel gears I were using had a bigger diametral pitch and smaller face width, making them even weaker.</p>
            <img className={theme.img_width} src={require('../../../../img/GearCalc.png')} />
            <img className={theme.img_width} src={require('../../../../img/geartable.png')} />
            <p>As the bevel gears were almost 5 times weaker than the spur gears, I decided to add an additional spur gear stage in the gearbox before the bevel gears so that the loads on the bevel gear would lessened. The intake arm is also neutrally balanced at all points of its travel using two surgical tubing springs. These springs allow the intake to stay at any position without any motor power, reducing the load on the gearbox.</p>
          </Card>
          <Card className={theme.card}>
            <h2>Awards</h2>
            <Row middle='xs'>
              <Col xs={12} md={6}>
                <h3>Arizona North Regional</h3>
                <ul className={theme.awlist}>
                  <li>{"Judge's Award"}</li>
                </ul>
                <h3>Silicon Valley Regional</h3>
                <ul className={theme.awlist}>
                  <li>Quality Award</li>
                  <li>Quarter-Finalists</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <img className={theme.img_width} src={require('../../../../img/mpaward.jpg')} />
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    )
  }
}
export default MonkeyPython
