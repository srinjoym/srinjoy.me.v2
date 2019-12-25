import React, { PropTypes } from 'react'
import { Button, IconButton } from 'react-toolbox/lib/button'
import { browserHistory, Link } from 'react-router';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import { Row, Col } from 'react-flexbox-grid/lib/'
import Chip from 'react-toolbox/lib/chip'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import theme from './CardExpand.scss'
import ReactGA from 'react-ga'

// Custom Card Component class, takes in props for aspect ratio, image, title, subtitle, and learn more links
class CardExpand extends React.Component {
  constructor (props) {
    super(props)
    // Card is not expanded by default
    this.state = { expanded: false }
  }

  // Changes toggle state and logs event for GA with title
  toggleExpandState () {
    if (this.props.text) {
      this.setState({ expanded: !this.state.expanded })
    } else if(this.props.link) {
      this.recordLearnMore()
      browserHistory.push(`/${this.props.link}`)
    }
    ReactGA.event({
      category: 'Navigation',
      action: 'Expanded card',
      label: this.props.title
    })
  }
  // Triggers GA event for metrics
  recordLearnMore () {
    ReactGA.event({
      category: 'Navigation',
      action: 'Learn More',
      label: this.props.title
    })
  }

  render () {
    return (
      <Card onClick={this.toggleExpandState.bind(this)} className={theme.card}>
        <CardMedia className={theme.cardMedia} aspectRatio={this.props.wide ? 'wide' : 'square'} image={this.props.image} />
        <Row className={theme.row} middle='xs'>
          <Col xs={10}>
            <CardTitle className={theme.title} title={this.props.title} subtitle={this.props.subtitle} />
          </Col>
          {this.props.text &&
          <Col className={theme.icon} xs={2}>
            <IconButton icon={this.state.expanded ? <FaAngleUp /> : <FaAngleDown /> } primary />
          </Col>
          }
          {this.props.categories &&
          <div className={theme.categories_container}>
            {this.props.categories.map(category => {
              return (
              <Chip className={theme.chip}>
                {category}
              </Chip>
              )
            })}
          </div>
          }
        </Row>
        {this.props.text && this.state.expanded &&
        <CardText className={theme.text}>{this.props.text}</CardText>
        }
        {this.props.link != null &&
        <CardActions>
          {this.props.ext ?
          <Button className={theme.action_button} onClick={this.recordLearnMore.bind(this)} label='Learn More' href={this.props.link} /> :
          <Link to={this.props.link}><Button className={theme.action_button} label='Learn More' /></Link>
          }
        </CardActions>
        }
      </Card>
    )
  }
}

CardExpand.propTypes = {
  ext: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired
}

CardExpand.defaultProps = {
  ext: false
}

export default CardExpand
