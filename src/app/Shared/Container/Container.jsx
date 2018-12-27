import React, { PropTypes } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import theme from './Container.scss'

// General container class for layouts with anchors for scrolling
class Container extends React.Component {
  render () {
    return (
      <div className={theme.max_width}>
        {this.props.anchor && <a className={theme.anchor} id={this.props.id} />}
        <Row center='xs' middle={this.props.middle ? 'xs' : 'lg'}>
          {/* <Col className={theme.col} xs={this.state.width > 1050 ? 9 : 11}> */}
          <Col className={theme.col} xs={11} lg={9}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    )
  }
}

Container.defaultProps = {
  anchor: true
}

Container.propTypes = {
  anchor: PropTypes.bool,
  id: PropTypes.number,
  middle: PropTypes.bool,
  children: PropTypes.any
}

export default Container
