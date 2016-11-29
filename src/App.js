import React from 'react';
import NavHeader from './component/NavHeader.js'
import NavFooter from './component/NavFooter.js'

class App extends React.Component {
  render () {
    return(
      <div>
        <NavHeader />
        {this.props.children}
        <NavFooter />
      </div>
    )
  }
}

export default App;
