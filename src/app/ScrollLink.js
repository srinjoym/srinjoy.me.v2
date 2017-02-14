import React, { PropTypes } from 'react';
import Link from 'react-toolbox/lib/link';
import Scroll from 'react-scroll';
import theme from '../css/ScrollLink.scss';
class ScrollLink extends React.Component{

  render(){
    return(
      <Link className={this.props.color? theme.b_link:theme.w_link}>
        <Scroll.Link to={this.props.id} smooth={true} offset={-50} >
          {this.props.name}
          {this.props.children}
        </Scroll.Link>
      </Link>
    );
  }
}
export default ScrollLink;
