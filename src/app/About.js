import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card} from 'react-toolbox/lib/card';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/About.scss';
import Container from './Container.js';
class About extends React.Component{
  render(){
    return(
      <Container id="about">
            <Card className={theme.cardOv}>
              <h2>Who Am I?</h2>
              <Row center="xs" middle="xs">
                <Col lg={4} sm={12}>
                <img className={theme.img} src={require("../../img/prof.jpg")}/>
                </Col>
              <Col lg={8} sm={12}>
                <p className={theme.p}>
                  Srinjoy is a freshman at the University of Texas at Austin studying
                  Electrical and Computer Engineering. He loves technology and hopes
                  to work with robots in his career. In High School, he was the President
                  of Lynbrook Robotics where he built and competed with technically
                  advanced FRC robots every year. He grew up in San Jose, California
                  where he was (and still is!) a huge fan of the Golden State Warriors
                  and the 49ers. Most recently, he spent his summer working at ATSA
                  Corp, where he built a web app that allows anyone to create and
                  learn from custom online courses.
                </p>
              </Col>
              </Row>
            </Card>
            {/* <h1><a><div class="bounce"><i class="fa fa-chevron-down fa-8"></i></div> </a> */}
            {/* </h1> */}
        </Container>
    );
  }
}
export default About;
