import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Layout } from 'react-toolbox';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Landing.scss';
import Particles from './Particles.jsx';
import Scroll from 'react-scroll';
class Landing extends React.Component{

  render(){
    return(
      <Scroll.Element name="landing">
        <div className={theme.bg}>
            <section className={theme.section}>
                <Row middle="xs">
                  <Col className={theme.maxWidth}>
                      <h1>Hi! I'm Srinjoy</h1>
                      <h1>Welcome to my website</h1>
                  </Col>
                </Row>
            </section>
        </div>
    </Scroll.Element>

    );
  }
}
export default Landing;
