
import React from 'react';
import Landing from './Landing.jsx';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Research from './Research.js';
import Awards from './Awards.js';
import { Grid,Row,Col } from 'react-flexbox-grid/lib/index';
import {Button, IconButton} from 'react-toolbox/lib/button';

//Renders all sub components of Home page.
class Home extends React.Component{

  render(){
    return(
      <div>
        <Landing/>
        <About/>
        <Experience/>
        <Research/>
        <Projects/>
        <Awards/>
      </div>
      );

    }
  }

  export default Home;
