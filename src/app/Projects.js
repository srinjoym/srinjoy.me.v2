import React from 'react'
import theme from '../css/Projects.scss'
import CardLayout from './CardLayout.js'
import ProjectsPersonal from '../data/Data_Projects_Personal.js'
import Container from './Container.js'

// Renders card layout with projects data
class Projects extends React.Component {
  render () {
    return (
      <div className={theme.bg}>
        <Container id='projects'>
          <h2>Projects</h2>
          <br />
          <CardLayout data={ProjectsPersonal} />
        </Container>
      </div>
    )
  }
}
export default Projects
