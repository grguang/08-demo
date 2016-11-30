import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className='nav-header'>
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-xbt" aria-hidden="true"></span>ack
        </button>
        <h3>Grguang@</h3>
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

export default NavHeader;
