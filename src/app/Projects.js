import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card} from 'react-toolbox/lib/card';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Projects.scss';
import Link from 'react-toolbox/lib/link';
import CardLayout from './CardLayout.js';
import projects from '../data/Data_Projects.js';
import Container from './Container.js';

//Renders card layout with projects data
class Projects extends React.Component{
  render(){
    return(
        <div className = {theme.bg}>
          <Container id="projects">
              <h2>Projects</h2>
              <br/>
              <CardLayout data={projects}/>
          </Container>
        </div>
    );
  }
}
export default Projects;
