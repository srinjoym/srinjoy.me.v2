import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card} from 'react-toolbox/lib/card';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Research.scss';
import Link from 'react-toolbox/lib/link';
import CardLayout from './CardLayout.js';
import projects_research from '../data/Data_Projects_Research.js';
import Container from './Container.js';

//Renders card layout with projects data
class Research extends React.Component{
  render(){
    return(
        <div className = {theme.bg}>
          <Container id="research">
              <h2>Research</h2>
              <br/>
              <CardLayout data={projects_research}/>
          </Container>
        </div>
    );
  }
}
export default Research;
