import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link activeStyle={{color:'purple'}} onlyActiveOnIndex={true } to='/'><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br />Home</Link>
        <Link activeStyle={{color:'purple'}} to='blog'><span className="glyphicon glyphicon-th-large" aria-hidden="true"></span><br />Blog</Link>
        <Link activeStyle={{color:'purple'}} to="work"><span className="glyphicon glyphicon-book" aria-hidden="true"></span><br />Work</Link>
        <Link activeStyle={{color:'purple'}} to='about'><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br />About</Link>

      </div>
    )
  }
}

export default NavFooter;
