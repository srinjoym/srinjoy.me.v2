import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import GrayAppBar from './GrayAppBar.js';
import '../css/App.scss';
import theme from '../css/App.scss';
import Footer from './Footer.js';
class App extends React.Component{

  render(){
    return(
    <div className={theme.div}>
      <GrayAppBar path={this.props.location.pathname}/>
      {this.props.children}
      <Footer/>
    </div>
    );
  }
}

export default App;
