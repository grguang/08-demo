import React, { PropTypes } from 'react'

import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3>HI,I AM <span>GRGUANG</span></h3>
            <p>Web Design</p>
            <RaisedButton label="lalala" secondary={true} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
