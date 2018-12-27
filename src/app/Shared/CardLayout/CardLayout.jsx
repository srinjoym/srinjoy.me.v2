import React, { PropTypes } from 'react'
import theme from './CardLayout.scss'
import CardExpand from './CardExpand/CardExpand.jsx'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  960: 2,
  600: 1
}

// Renders group of cards with data from props, can specify card size from data
class CardLayout extends React.Component {
  render () {
    return (
      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={theme.grid}
          columnClassName={theme.grid_column}
        >
          {this.props.data.map(expData => {
            return <CardExpand
              key={expData.image}
              image={require('../../../../img/' + expData.image)}
              title={expData.title}
              subtitle={expData.subtitle}
              text={expData.text}
              link={expData.link}
              ext={expData.ext}
              wide={expData.wide} />
          })}
        </Masonry>
      </div>
    )
  }
}

CardLayout.propTypes = {
  data: PropTypes.array
}

export default CardLayout
