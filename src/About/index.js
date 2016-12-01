import React, { PropTypes } from 'react'
import axios from 'axios'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  constructor(){
    super()
    this.state={
      data:{},
      wait:true
    }
  }
  handleSubmit(e){
    e.preventDefault()
    let name=this.refs.git.getValue();
    this.refs.form.reset()
  }
  render () {
    return(
      <div className="about-wrap">
        <div className="git-card">
          <h2>Search Git Info</h2>
          <form className='about-form' onSubmit={this.handleSubmit.bind(this)} ref="form">
            <TextField hintText="Hint Text" underLineFocusStyle={{borderColor:'#00bcd4'}} ref="git" style={{width:'50%'}} placeholder="add a git user" />
            <RaisedButton label="Secondary" secondary={true} style={{marginLeft:'10px'}} onClick={this.handleSubmit.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default About;
