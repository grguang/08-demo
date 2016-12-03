import React, { PropTypes } from 'react'
import BlogCard from '../component/BlogCard.js'
import Loading from '../component/Loading.js'

import axios from 'axios'

class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/grguang/08-demo/master/data/blogcard.json')
          .then( res => this.setState({data:res.data,wait:false}))
  }
  render () {
    return(
      <div className='blog-wrap'>
        {this.state.wait ? <Loading /> :
          this.state.data.map( (item,index)=><BlogCard {...item} key={index} />)}
      </div>
    )
  }
}

export default Blog;
