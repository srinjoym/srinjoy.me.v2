import React from 'react'
import Header from './Header.js'
import theme from '../css/App.scss'
import Footer from './Footer.js'

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

export default App
