import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Layout } from 'react-toolbox';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Robot.scss';
import Particles from './Particles.jsx';
import Scroll from 'react-scroll';
import Link from 'react-toolbox/lib/link';
import Card from 'react-toolbox/lib/card';
import Container from './Container';
import { List, ListItem} from 'react-toolbox/lib/list';
class SoftRobot extends React.Component{

  render(){
    return(
      <div className={theme.softrobotbg}>

        <Container>
          <h2  className={theme.contmarg}>Soft Robotic Gripper</h2>
            <Card className={theme.card}>
              <h3>The Base</h3>
              <img className={theme.img_small_width} src={require("../../img/base.png")}></img>
              <p>I modeled the base using Autodesk Inventor, and made the design almost fully 3D printable. I went through several iterations on my design to eliminate all interferences between the arms and to get everything to fit neatly. As a result, I didn’t have to print my parts over and over again, because I had already done all my checks on the 3D model. I designed the arm to have a reach of around 10 inches so that it could grab objects anywhere. I used servos to power the arm, and an Arduino to control all of them. I also used a bungee cord as a counterbalance on the arm so it would maintain its position even when there was no power to the motors. This prevented the motors from running all the time and stalling.  For the next revision, I would use more heavy duty motors with more power so that I could make the arm sturdier.</p>
            </Card>
            <Card className={theme.card}>
              <h2>Soft Robotic Gripper</h2>
              <h3>The Gripper</h3>
              <img className={theme.img_small_width} src={require("../../img/gripper.png")}></img>
              <p>I designed the Gripper of the Robotic Arm using Autodesk Inventor as well. I designed the molds to be 3D printable so I was able to prototype really quickly. I finally settled on a four finger design that was very effective at grabbing objects. After I 3D printed the molds, I poured EcoFlex into them and let them set under the sun. The final product was a silicone gripper with ridges for air to flow so that the finger could fold and grab things. I used a pneumatic compressor and a pressure sensor to maintain constant pressure so the gripper would not lose grip on objects. I also used Abaqus a Finite Element Analysis software to model what the gripper would do once actuated, so I had more accurate results.</p>
            </Card>

        </Container>
      </div>
    );
  }
}
export default SoftRobot;
