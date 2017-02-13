import React, { PropTypes } from 'react';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Container.scss';
import Scroll from 'react-scroll';
class Container extends React.Component{
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
    return(
        <Scroll.Element name={this.props.id} className={theme.max_width}>
          <Row center="xs">
            <Col xs={this.state.width>950? 9:11}>
              {this.props.children}
            </Col>
          </Row>
        </Scroll.Element>
    );
  }
}
export default Container;
