import React, { PropTypes } from 'react'

import marked from 'marked'

class Item extends React.Component {
  render () {
    let content = this.props.params.title==0 ? 'yi' :
      this.props.params.title==1 ? 'er' :
        this.props.params.title==2 ? 'san' : 'si'
    return(
      <div>
        {content}
        <div dangerouslySetInnerHTML={{__html:marked('# 我是h1')}}></div>
      </div>
    )
  }
}

export default Item;
