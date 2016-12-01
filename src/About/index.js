import React, { PropTypes } from 'react'
import axios from 'axios'
import Loading from '../component/Loading.js'
import ShowGit from '../component/ShowGit.js'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  constructor(){
    super()
    this.state={
      data:{},
      // 0 没搜索； 1 后台未响应，正在请求数据中； 2 数据接收完成
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault()
    this.setState({
      wait:1
    })
    let value=this.refs.git.getValue();
    axios.get(`https://api.github.com/users/${value}`)
        .then(res => this.setState({data:res.data,wait:2}))
        .catch(error => { alert(error);this.setState({wait:0})} )
    this.refs.form.reset()
  }
  render () {
    let showGitinfo = this.state.wait==0 ? null :
      this.state.wait==1 ? <Loading /> : <ShowGit gitInfo={this.state.data}/>
    return(
      <div className="about-wrap">
        <div className="git-card">
          <h2>Search Git Info</h2>
          <form className='about-form' onSubmit={this.handleSubmit.bind(this)} ref="form">
            <TextField hintText="Hint Text" underlineFocusStyle={{borderColor:'#00bcd4'}} ref="git" style={{width:'50%'}} />
            <RaisedButton label="Secondary" secondary={true} style={{marginLeft:'10px'}} onClick={this.handleSubmit.bind(this)} />
          </form>
          {showGitinfo}
        </div>
      </div>
    )
  }
}

export default About;
