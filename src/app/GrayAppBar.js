import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from '../css/GrayAppBar.scss';
import { Grid,Row,Col } from 'react-flexbox-grid/lib/index';
import Navigation from 'react-toolbox/lib/navigation';
import Waypoint from 'react-waypoint';
import ScrollLink from './ScrollLink.js';
import IconButton from 'react-toolbox/lib/button';
import Container from './Container.js';
import Logo from './Logo.js';
import Dialog from 'react-toolbox/lib/dialog';
class GrayAppBar extends React.Component{
  constructor(props){
    super(props);
    // var scroll_top = $(window).scrollTop();
    this.state = {transparent:true,active:false};
  }
  visible(){
    this.setState({transparent:false});
  }
  invisible(){
    this.setState({transparent:true});
  }
  displayMenu = () => {
   this.setState({active: !this.state.active});
 }
  render(){
    return(
      <div>
      <Waypoint onEnter={this.visible.bind(this)} onLeave={this.invisible.bind(this)}/>

      <AppBar fixed flat className={this.state.transparent? theme.n_trans:theme.trans}>
        <Container >
            <Row middle="xs">
              <Col xs={2}>
                <ScrollLink name="SM" id="landing"/>
              </Col>
              <Col xs={10}>
                <Navigation className={theme.nav}>
                  <IconButton onClick={this.displayMenu.bind(this)} icon='menu' neutral mini />
                  <ScrollLink name="Awards" id="awards"/>
                  <ScrollLink name="Projects" id="projects"/>
                  <ScrollLink name="Experience" id="experience"/>
                  <ScrollLink name="About Me" id="about"/>
                </Navigation>
              </Col>
            </Row>
          </Container>
          <Dialog
          active={this.state.active}
          onEscKeyDown={this.displayMenu}
          onOverlayClick={this.displayMenu}
          type='small'
        >
          <h4>Menu</h4>
          {/* <IconButton onClick={this.displayMenu.bind(this)} icon={'close'} accent /> */}
          <Navigation type='vertical'>
            <ScrollLink name="Awards" id="awards"/>
            <ScrollLink name="Projects" id="projects"/>
            <ScrollLink name="Experience" id="experience"/>
            <ScrollLink name="About Me" id="about"/>
          </Navigation>
        </Dialog>
      </AppBar>
    </div>
    );
  }
}

GrayAppBar.propTypes = {
  children: PropTypes.node
};

export default GrayAppBar;
