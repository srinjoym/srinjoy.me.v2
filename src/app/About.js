import React, { PropTypes } from 'react';
import { Card} from 'react-toolbox/lib/card';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/About.scss';
import Container from './Container.js';

//About component on home page
class About extends React.Component{
  render(){
    return(
      <div className={theme.bg}>
      <Container id="about">
            <Card className={theme.cardOv}>
              <h2>Who Am I?</h2>
              <Row center="xs" middle="xs">
                <Col lg={4} sm={12}>
                <img className={theme.img} src={require("../../img/prof.jpg")}/>
                </Col>
              <Col lg={8} sm={12}>
                <p className={theme.p}>
                  Srinjoy is a second-year student at the University of Texas at Austin studying Electrical and Computer
                  Engineering. He is a research assistant under Prof. Scott Niekum in the Personal Autonomous Robotics
                  Lab at UT Austin, where he works on Deep Learning projects and programs robots for Human Robot Interaction tasks.
                  He is also working as a Software Engineering Intern at Datos IO, where he works on cloud data
                  protection at scale for big data filesystems like Hadoop. He grew up in San Jose, California where he was (and still is!)
                  a huge fan of the Golden State Warriors and the 49ers.
                </p>
              </Col>
              </Row>
            </Card>
        </Container>
      </div>
    );
  }
}
export default About;
