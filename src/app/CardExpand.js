import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card,CardMedia,CardTitle,CardText,CardActions} from 'react-toolbox/lib/card';
import {IconButton} from 'react-toolbox/lib/button'
import { Row,Col } from 'react-flexbox-grid/lib/';
import theme from '../css/CardExpand.scss';
import {Link} from 'react-router';
import ReactGA from 'react-ga';

class CardExpand extends React.Component{
  constructor(props){
    super(props);
    this.state = {expanded:false,focus:false};
  }
  toggleExpandState(){
    this.setState({expanded:!this.state.expanded});
    ReactGA.event({
       category:'Navigation',
       action:'Expanded card',
       label: this.props.title
    });
  }
  recordLearnMore(){
     ReactGA.event({
        category:'Navigation',
        action:'Learn More',
        label: this.props.title
     });
  }
  render(){

    return(
      <Card onClick={this.toggleExpandState.bind(this)} className={theme.card}>
        <CardMedia aspectRatio={this.props.wide ? 'wide':'square'} image={this.props.image}></CardMedia>
        <Row className={theme.row} middle="xs">
          <Col xs={10}>
            <CardTitle className={theme.title} title={this.props.title} subtitle={this.props.subtitle}/>
          </Col>
          <Col className={theme.icon} xs={2}>
            <IconButton icon={this.state.expanded? 'keyboard_arrow_up':'keyboard_arrow_down'} floating primary raised />
          </Col>
        </Row>
        {this.state.expanded &&
          <CardText className={theme.text}>{this.props.text}</CardText>
        }
        {this.props.link != null &&
          <CardActions>
            {this.props.ext? <Button onClick={this.recordLearnMore.bind(this)} label="Learn More" href={this.props.link}/>:<Link to={this.props.link}><Button label="Learn More" /></Link>}
          </CardActions>
        }
        <hr className={theme.line}/>
      </Card>
    );
  }
}

CardExpand.defaultProps = {
    ext:false
};

export default CardExpand;
