import React, { PropTypes } from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import { Button } from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'
import { Row, Col } from 'react-flexbox-grid/lib/index'
import Waypoint from 'react-waypoint'

import theme from './Header.scss'
import ScrollLink from '../Shared/ScrollLink/ScrollLink.jsx'
import Container from '../Shared/Container/Container.jsx'
import Logo from '../Shared/Logo/Logo.jsx'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { transparent: true, active: false }
    this.visible = this.visible.bind(this)
    this.invisible = this.invisible.bind(this)
    this.displayMenu = this.displayMenu.bind(this)
  }
  visible () {
    this.setState({ transparent: false })
  }
  invisible () {
    this.setState({ transparent: true })
  }
  displayMenu () {
    this.setState({ active: !this.state.active })
  }
  render () {
    return (
      <div>
        <Waypoint onEnter={this.visible} onLeave={this.invisible} />

        <AppBar fixed flat rightIcon='menu' className={this.state.transparent ? theme.n_trans : theme.trans} onRightIconClick={this.displayMenu}>
          <Container>
            <Row middle='xs'>
              <Col xs={3}>
                <ScrollLink path={this.props.path} color={this.state.transparent} id='landing'>
                  <Logo />
                </ScrollLink>
              </Col>
              <Col xs={9}>
                <Navigation className={theme.nav}>
                  <Button onClick={this.displayMenu} className={this.state.transparent ? theme.black : theme.white} icon='menu' floating mini />
                  <ScrollLink path='https://drive.google.com/file/d/0B3RGMraz9IZlNi1WZ0ZJU01fdTA/view?usp=sharing' color={this.state.transparent} name='Resume' id='res' link />
                  <ScrollLink path={this.props.path} color={this.state.transparent} name='Awards' id='awards' />
                  <ScrollLink path={this.props.path} color={this.state.transparent} name='Projects' id='projects' />
                  <ScrollLink path={this.props.path} color={this.state.transparent} name='Research' id='research' />
                  <ScrollLink path={this.props.path} color={this.state.transparent} name='Experience' id='experience' />
                  <ScrollLink path={this.props.path} color={this.state.transparent} name='About Me' id='about' />
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
              <ScrollLink path={this.props.path} color name='About Me' id='about' onClick={this.displayMenu} />
              <ScrollLink path={this.props.path} color name='Experience' id='experience' onClick={this.displayMenu} />
              <ScrollLink path={this.props.path} color name='Research' id='research' onClick={this.displayMenu} />
              <ScrollLink path={this.props.path} color name='Projects' id='projects' onClick={this.displayMenu} />
              <ScrollLink path={this.props.path} color name='Awards' id='awards' onClick={this.displayMenu} />
              <ScrollLink path='https://drive.google.com/file/d/0B3RGMraz9IZlNi1WZ0ZJU01fdTA/view?usp=sharing' color name='Resume' id='res' link />
            </Navigation>
          </Dialog>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string
}

export default Header
