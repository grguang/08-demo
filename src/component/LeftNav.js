import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="leftnav-wrap">
        <h3>Grguang@{this.props.title}</h3>
        <Link to='/' activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        <div><Link to='blog' activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}><span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>Blog</Link></div>
        <div><Link to='work' activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}><span className="glyphicon glyphicon-book" aria-hidden="true"></span>Work</Link></div>
        <div><Link to='about' activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span>About</Link></div>
      </div>
    )
  }
}

export default LeftNav;
