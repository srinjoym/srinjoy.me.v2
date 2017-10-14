import React, { PropTypes } from 'react';
import { Layout } from 'react-toolbox';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Landing.scss';
import ReactGA from 'react-ga';
import Link from 'react-toolbox/lib/link';
import ScrollLink from './ScrollLink.js';
import ReactDipper from 'react-dipper';
import dipper_config from './dipper_config.json';

//Landing page with react dipper background
class Landing extends React.Component{
     recordScroll(){
        ReactGA.event({
           category:'Navigation',
           action:'Landing Scroll'
        });
     }
     render(){

       return(

           <div className={theme.bg}>
             <div className={theme.particles}>
               <ReactDipper styleParams={dipper_config}/>
             </div>
             <a id="landing"/>
               <section className={theme.section}>
                   <Row middle="xs">
                     <Col className={theme.maxWidth}>
                         <h1 className={theme.h1}>Hi! I'm Srinjoy</h1>
                         <h1 className={theme.h1}>Welcome to my website</h1>
                     </Col>
                   </Row>
                   <ScrollLink onClick={this.recordScroll.bind(this)} path="/" id="about"><Link className={theme.bounce} href="" icon='keyboard_arrow_down' /></ScrollLink>
               </section>
           </div>
       );
     }
}
export default Landing;
