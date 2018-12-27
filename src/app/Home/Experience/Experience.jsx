import React from 'react'
import theme from './Experience.scss'
import CardLayout from '../../Shared/CardLayout/CardLayout.jsx'
import experience from '../../../data/Data_Experience.js'
import Container from '../../Shared/Container/Container.jsx'

// Renders card layout with data from experience
class Experience extends React.Component {
  render () {
    return (
      <div className={theme.bg}>
        <Container id='experience'>
          <h2>Where I've Worked</h2>
          <br />
          <CardLayout data={experience} />
        </Container>
      </div>
    )
  }
}
export default Experience
