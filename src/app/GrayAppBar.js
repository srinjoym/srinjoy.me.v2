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
                <ScrollLink path={this.props.path} color={this.state.transparent} id="landing"><Logo transparent={this.state.transparent}/></ScrollLink>
              </Col>
              <Col xs={10}>
                <Navigation className={theme.nav}>
                  <IconButton onClick={this.displayMenu.bind(this)} className={this.state.transparent? theme.black:theme.white} icon='menu' mini />
                  <ScrollLink path="https://drive.google.com/file/d/0B3RGMraz9IZlbXZIWDBheW1reXM/view?usp=sharing" color={this.state.transparent} name="Resume" id="res" link={true}/>
                  <ScrollLink path={this.props.path}  color={this.state.transparent} name="Awards" id="awards"/>
                  <ScrollLink path={this.props.path} color={this.state.transparent} name="Projects" id="projects"/>
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
          type='small'
        >
          <h4>Menu</h4>
          {/* <IconButton onClick={this.displayMenu.bind(this)} icon={'close'} accent /> */}
          <Navigation type='vertical'>
            <ScrollLink path={this.props.path} color={true} name="About Me" id="about"/>
            <ScrollLink path={this.props.path} color={true} name="Experience" id="experience"/>
            <ScrollLink path={this.props.path} color={true} name="Projects" id="projects"/>
            <ScrollLink path={this.props.path} color={true} name="Awards" id="awards"/>
            <ScrollLink path="https://drive.google.com/file/d/0B3RGMraz9IZlbXZIWDBheW1reXM/view?usp=sharing" color={true} name="Resume" id="res" link={true}/>
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
