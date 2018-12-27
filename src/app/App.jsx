import React, { PropTypes } from 'react'
import Header from './Header/Header.jsx'
import theme from './App.scss'
import Footer from './Footer/Footer.jsx'

// Base class for all pages
class App extends React.Component {
  render () {
    return (
      <div className={theme.div}>
        <Header path={this.props.location.pathname} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.any
}

export default App
