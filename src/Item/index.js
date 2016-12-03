import React, { PropTypes } from 'react'

import marked from 'marked'
import axios from 'axios'

import Loading from '../component/Loading.js'

class Item extends React.Component {
  constructor(){
    super()
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let address = this.props.params.title
    axios.get(`https://raw.githubusercontent.com/grguang/08-demo/master/data/${address}.md`)
      .then(res=>this.setState({data:res.data,wait:false}))
  }
  render () {
    return(
      <div className="item-wrap">
        {this.state.wait ? <Loading /> : <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}}></div>}
      </div>
    )
  }
}

export default Item;
