import React, { PropTypes } from 'react'

import marked from 'marked'
import axios from 'axios'
import hljs from 'highlight.js'

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
      .catch(err => alert(err))
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs('highlight.js').highlightAuto(code).value;
      }
    });
    return(
      <div className="item-wrap">
        {this.state.wait ? <Loading /> :
           <div className="post-content" dangerouslySetInnerHTML={{__html:marked(this.state.data)}}></div>}
      </div>
    )
  }
}

export default Item;
