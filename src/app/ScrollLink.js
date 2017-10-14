import React, { PropTypes } from 'react';
import Toolbox_Link from 'react-toolbox/lib/link';
import theme from '../css/ScrollLink.scss';
import {Link} from 'react-router';
import Scrollchor from 'react-scrollchor';

//Wrapper around link to allow for scrolling from header
class ScrollLink extends React.Component{

  render(){
    return(
      <Toolbox_Link href={this.props.link? this.props.path:""} className={this.props.color? theme.b_link:theme.w_link}>
        {!this.props.link&&(this.props.path=="/"?
        <Scrollchor afterAnimate={this.props.onClick} to={"#"+this.props.id} animate={{ duration: 400}} >
          {this.props.name}
          {this.props.children}
        </Scrollchor>:<Link onClick={this.props.onClick} to={"/#"+this.props.id}>{this.props.name}{this.props.children}</Link>)}
        {this.props.link&&<a>{this.props.name}</a>}
      </Toolbox_Link>
    );
  }
}
ScrollLink.defaultProps = {
  link:false
};
export default ScrollLink;
