import React, { PropTypes } from 'react';
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/Container.scss';

//General container class for layouts with anchors for scrolling
class Container extends React.Component{
  constructor(props) {
    super(props);
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
      <div className={theme.max_width}>
        {this.props.anchor&& <a className={theme.anchor} id={this.props.id}/>}
        <Row center="xs" middle={this.props.middle? "xs":"lg"}>
          <Col className={theme.col} xs={this.state.width>1050? 9:11}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}
Container.defaultProps = {
    anchor:true
};
export default Container;
