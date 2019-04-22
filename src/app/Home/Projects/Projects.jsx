import React from 'react'
import theme from './Projects.scss'
import CardLayout from '../../Shared/CardLayout/CardLayout.jsx'
import ProjectsPersonal from '../../../data/Data_Projects_Personal.js'
import Container from '../../Shared/Container/Container.jsx'

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
