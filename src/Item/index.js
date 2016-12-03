import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    let content = this.props.params.title==1 ? 'yi' :
      this.props.params.title==2 ? 'er' :
        this.props.params.title==3 ? 'san' : 'si'
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
