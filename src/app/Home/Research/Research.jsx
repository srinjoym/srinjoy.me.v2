import React from 'react'
import theme from './Research.scss'
import CardLayout from '../../Shared/CardLayout/CardLayout.jsx'
import ProjectsResearch from '../../../data/Data_Projects_Research.js'
import Container from '../../Shared/Container/Container.jsx'

// Renders card layout with projects data
class Research extends React.Component {
  render () {
    return (
      <div className={theme.bg}>
        <Container id='research'>
          <h2>Research</h2>
          <br />
          <CardLayout data={ProjectsResearch} />
        </Container>
      </div>
    )
  }
}
export default Research
