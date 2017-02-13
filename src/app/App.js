import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import GrayAppBar from './GrayAppBar.js';
import '../css/App.scss';
import theme from '../css/App.scss';

class App extends React.Component{

  render(){
    return(
    <div className={theme.div}>
      <GrayAppBar/>
      {this.props.children}
    </div>
    );
  }
}

export default App;
