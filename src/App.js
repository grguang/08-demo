import React from 'react';
import NavHeader from './component/NavHeader.js'
import NavFooter from './component/NavFooter.js'

class App extends React.Component {
  render () {
    return(
      <div className="my-wrap">
        <NavHeader />
        <div className="my-main">
          {this.props.children}
        </div>
        <NavFooter />
      </div>
    )
  }
}

export default App;
