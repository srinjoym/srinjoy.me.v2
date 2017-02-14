import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Layout } from 'react-toolbox';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Landing.scss';
import Particles from './Particles.jsx';
import Scroll from 'react-scroll';
import Link from 'react-toolbox/lib/link';
import ScrollLink from './ScrollLink.js';
class Landing extends React.Component{

  render(){
    return(
      <Scroll.Element name="landing">
        <div className={theme.bg}>
            <section className={theme.section}>
                <Row middle="xs">
                  <Col className={theme.maxWidth}>
                      <h1> </h1>
                      <h1>Hi! I'm Srinjoy</h1>
                      <h1>Welcome to my website</h1>
                  </Col>
                </Row>
                <ScrollLink id="about"><Link className={theme.bounce} href="" icon='keyboard_arrow_down' /></ScrollLink>
            </section>

        </div>
    </Scroll.Element>

    );
  }
}
export default Landing;
