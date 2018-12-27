import React from 'react'
import theme from './Awards.scss'
import CardLayout from '../../Shared/CardLayout/CardLayout.jsx'
import awards from '../../../data/Data_Awards.js'
import Container from '../../Shared/Container/Container.jsx'

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
