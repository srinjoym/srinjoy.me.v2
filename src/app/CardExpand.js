import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card,CardMedia,CardTitle,CardText,CardActions} from 'react-toolbox/lib/card';
import {IconButton} from 'react-toolbox/lib/button'
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/CardExpand.scss';
import {Link} from 'react-router';
class CardExpand extends React.Component{
  constructor(props){
    super(props);
    this.state = {expanded:false,focus:false};
  }
  toggleExpandState(){
    this.setState({expanded:!this.state.expanded});
  }
  inFocus(){
    this.setState({focus:true});
  }
  outFocus(){
    this.setState({focus:false});
  }
  render(){

    return(
      <Card onMouseOver={this.inFocus.bind(this)} onMouseOut={this.outFocus.bind(this)} className={theme.card} raised={this.state.focus}>
        <CardMedia aspectRatio='square' image={this.props.image}></CardMedia>
        <Row className={theme.row} middle="xs">
          <Col xs={10}>
            <CardTitle className={theme.title} title={this.props.title} subtitle={this.props.subtitle}/>
          </Col>
          <Col className={theme.icon} xs={2}>
            <IconButton onClick={this.toggleExpandState.bind(this)} icon={this.state.expanded? 'keyboard_arrow_up':'keyboard_arrow_down'} accent />
          </Col>
        </Row>
        {this.state.expanded &&
          <CardText className={theme.text}>{this.props.text}</CardText>
        }
        {this.props.link != null &&
          <CardActions>
            <Link to={this.props.link}><Button label="Learn More" href={this.props.link}/></Link>

          </CardActions>
        }
      </Card>
    );
  }
}
export default CardExpand;
