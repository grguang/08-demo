import React from 'react';
import NavHeader from './component/NavHeader.js'
import NavFooter from './component/NavFooter.js'

import getMuiTheme from 'material-ui/styles/getMuiTheme'; //material-ui

class App extends React.Component {
  getChildContext(){
    return {muiTheme:getMuiTheme()}
  } //material-ui
  constructor(){
    super()
    this.state={
      title:'Home'
    }
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
            this.context.router.isActive('blog') ? 'Blog' :
            this.context.router.isActive('work') ? 'Work' :
            this.context.router.isActive('about') ? 'About' : 'Blog'
    })
  }
  componentWillReceiveProps(){
    this.setTitle()
  }//切换显示@后
  componentWillMount(){
    this.setTitle()
  }//打开时显示@后
  render () {
    return(
      <div className="my-wrap">
        <NavHeader title={this.state.title}/>
        <div className="my-main">
          {this.props.children}
        </div>
        <NavFooter />
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object
};
App.childContextTypes = {
  muiTheme: React.PropTypes.object
};//material-ui

export default App;
