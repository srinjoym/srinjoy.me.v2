import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card} from 'react-toolbox/lib/card';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Landing.scss';
import Dimensions from 'react-dimensions';
import Particles from './Particles.jsx';

class CustomParticles extends React.Component{
  constructor(props) {
    super(props);
    this.handleWidth = 100;
    this.state = { height: '0px' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render(){
    var particles_config = {particlesNumber: 0.1*this.props.containerWidth,
			linkDist: 100,
			createLinkDist: 150,
			disableLinks: false,
			disableMouse: false,
			background: 'transparent',
			color: '#FFF',
			linksWidth: 1};

    var particle_config = {
			color: '#FFF',
			minSize: 2,
			maxSize: 4,
			speed: 20
		};
    return(
          <div className={theme.particles}>
            <Particles width={this.props.containerWidth} height={this.props.containerHeight} particles={particles_config} particle={particle_config}/>
          </div>
    );
  }
}
export default Dimensions()(CustomParticles);
