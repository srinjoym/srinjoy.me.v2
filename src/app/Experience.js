import React from 'react'
import theme from '../css/Experience.scss'
import CardLayout from './CardLayout.js'
import experience from '../data/Data_Experience.js'
import Container from './Container.js'

// Renders card layout with data from experience
class Experience extends React.Component {
  render () {
    return (
      <div className={theme.bg}>
        <Container id='experience'>
          <h2>Experience</h2>
          <br />
          <CardLayout data={experience} />
        </Container>
      </div>
    )
  }
}
export default Experience
