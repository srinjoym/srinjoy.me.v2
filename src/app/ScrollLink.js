import React, { PropTypes } from 'react';
import Link2 from 'react-toolbox/lib/link';
import Scroll from 'react-scroll';
import theme from '../css/ScrollLink.scss';
import {Link} from 'react-router';
import Scrollchor from 'react-scrollchor';
class ScrollLink extends React.Component{

  render(){
    return(
      <Link2 href={this.props.link? this.props.path:""}className={this.props.color? theme.b_link:theme.w_link}>
        {/* {this.props.path=="/"? <Scroll.Link to={this.props.id} smooth={true} offset={-50} >
          {this.props.name}
          {this.props.children}
        </Scroll.Link>:<Link to={"/"+this.props.id}>{this.props.name}</Link>} */}
        {!this.props.link&&(this.props.path=="/"?
        <Scrollchor to={"#"+this.props.id} animate={{ duration: 1000}} >
          {this.props.name}
          {this.props.children}
        </Scrollchor>:<Link to={"/#"+this.props.id}>{this.props.name}{this.props.children}</Link>)}
        {this.props.link&&<a>{this.props.name}</a>}
      </Link2>
    );
  }
}
ScrollLink.defaultProps = {
  link:false
};
export default ScrollLink;
