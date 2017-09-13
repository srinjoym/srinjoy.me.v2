import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card} from 'react-toolbox/lib/card';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Experience.scss';
import Link from 'react-toolbox/lib/link';
import CardLayout from './CardLayout.js';
import experience from '../data/Data_Experience.js';
import Container from './Container.js';

class Experience extends React.Component{
  render(){
    return(
        <div className={theme.bg}>
          <Container id='experience'>
              <h2>Experience</h2>
              <br/>
              <CardLayout data={experience}/>
          </Container>
        </div>
    );
  }
}
export default Experience;
