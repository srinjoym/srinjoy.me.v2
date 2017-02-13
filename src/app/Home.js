
import React from 'react';
import Landing from './Landing.jsx';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Awards from './Awards.js';
import { Grid,Row,Col } from 'react-flexbox-grid/lib/index';
import {Button, IconButton} from 'react-toolbox/lib/button';
class Home extends React.Component{

  render(){
    return(
      <div>
        <Landing/>
        <br/>
        <About/>
        <br/>
        <Experience/>
        <br/>
        <Projects/>
        <br/>
        <Awards/>
      </div>
      );

    }
  }

  export default Home;
