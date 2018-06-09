import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import theme from '../css/GrayAppBar.scss';
import { Row,Col } from 'react-flexbox-grid/lib/index';
import Navigation from 'react-toolbox/lib/navigation';
import Waypoint from 'react-waypoint';
import ScrollLink from './ScrollLink.js';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Container from './Container.js';
import Logo from './Logo.js';
import Dialog from 'react-toolbox/lib/dialog';


class Header extends React.Component{
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

      <AppBar fixed flat rightIcon="menu" className={this.state.transparent? theme.n_trans:theme.trans} onRightIconClick={this.displayMenu.bind(this)}>
        <Container>
            <Row middle="xs">
              <Col xs={2}>
                <ScrollLink path={this.props.path} color={this.state.transparent} id="landing"><Logo transparent={this.state.transparent}/></ScrollLink>
              </Col>
              <Col xs={10}>
                <Navigation className={theme.nav}>
                  <Button onClick={this.displayMenu.bind(this)} className={this.state.transparent? theme.black:theme.white} icon='menu' floating mini/>
                  <ScrollLink path="https://drive.google.com/file/d/0B3RGMraz9IZlNi1WZ0ZJU01fdTA/view?usp=sharing" color={this.state.transparent} name="Resume" id="res" link={true}/>
                  <ScrollLink path={this.props.path}  color={this.state.transparent} name="Awards" id="awards"/>
                  <ScrollLink path={this.props.path} color={this.state.transparent} name="Projects" id="projects"/>
                  <ScrollLink path={this.props.path} color={this.state.transparent} name="Research" id="research"/>
                  <ScrollLink path={this.props.path}  color={this.state.transparent} name="Experience" id="experience"/>
                  <ScrollLink path={this.props.path}  color={this.state.transparent} name="About Me" id="about"/>
                </Navigation>
              </Col>
            </Row>
          </Container>
          <Dialog
          active={this.state.active}
          onEscKeyDown={this.displayMenu}
          onOverlayClick={this.displayMenu}
          type='small'>

          <h4>Menu</h4>
          <Navigation type='vertical'>
            <ScrollLink path={this.props.path} color={true} name="About Me" id="about" onClick={this.displayMenu.bind(this)}/>
            <ScrollLink path={this.props.path} color={true} name="Experience" id="experience" onClick={this.displayMenu.bind(this)}/>
            <ScrollLink path={this.props.path} color={true} name="Research" id="research" onClick={this.displayMenu.bind(this)}/>
            <ScrollLink path={this.props.path} color={true} name="Projects" id="projects" onClick={this.displayMenu.bind(this)}/>
            <ScrollLink path={this.props.path} color={true} name="Awards" id="awards" onClick={this.displayMenu.bind(this)}/>
            <ScrollLink path="https://drive.google.com/file/d/0B3RGMraz9IZlNi1WZ0ZJU01fdTA/view?usp=sharing" color={true} name="Resume" id="res" link={true}/>
          </Navigation>
        </Dialog>
      </AppBar>
    </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
