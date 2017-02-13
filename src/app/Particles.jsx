import React, { Component, PropTypes } from 'react';
import Particles from './Particles.js';

const particlesType = PropTypes.shape({
	particlesNumber: PropTypes.number,
	linkDist: PropTypes.number,
	createLinkDist: PropTypes.number,
	disableLinks: PropTypes.bool,
	disableMouse: PropTypes.bool,
	background: PropTypes.string,
	color: PropTypes.string,
	linksWidth: PropTypes.number,
	particle: PropTypes.object,
});

const particleType = PropTypes.shape({
	color: PropTypes.string,
	minSize: PropTypes.number,
	maxSize: PropTypes.number,
	speed: PropTypes.number,
});

export default class ParticlesComponent extends Component {
	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		particles: particlesType,
		particle: particleType,
	}

	static defaultProps = {
		width: 250,
		height: 250,
		particles: {
			particlesNumber: 150,
			linkDist: 100,
			createLinkDist: 150,
			disableLinks: false,
			disableMouse: false,
			background: 'transparent',
			color: '#333333',
			linksWidth: 1,
		},

		particle: {
			color: '#333333',
			minSize: 2,
			maxSize: 4,
			speed: 20,
		}
	}

	constructor(props){
		super(props);

		this.props.particles.particle = this.props.particle;
		this.props.particles.width = this.props.width;
		this.props.particles.height = this.props.height;
	}

	state = {
		particles: {
			resize: function(){}
		}
	}

	componentDidMount(){
		var particles = new Particles(this.refs.canvas, this.props.particles);

		this.setState({
			particles,
		});
	}

	componentWillReceiveProps(nextProps) {
		var { width, height } = nextProps;

		if(this.props.width != width || this.props.height != height) {
			this.state.particles.resize(width, height);
		}
	}

	componentWillUnmount(){
		this.state.particles.remove();
	}

	setParams() {

	}

	render(){
		return (
			<canvas
				className='Particles'
				ref='canvas'
				onMouseMove={this.state.particles.onMouseMove}
				onMouseLeave={this.state.particles.onMouseLeave}
				onMouseEnter={this.state.particles.onMouseEnter} />
		);
	}
}
