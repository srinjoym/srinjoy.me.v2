import React from 'react'
import theme from '../css/Awards.scss'
import CardLayout from './CardLayout.js'
import awards from '../data/Data_Awards.js'
import Container from './Container.js'

// Renders card layout with data
class Awards extends React.Component {
  render () {
    return (
      <div className={theme.bg}>
        <Container id='awards'>
          <h2>Awards</h2>
          <br />
          <CardLayout data={awards} />
        </Container>
      </div>
    )
  }
}
export default Awards
