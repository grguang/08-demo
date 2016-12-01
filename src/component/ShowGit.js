import React, { PropTypes } from 'react'

class ShowGit extends React.Component {
  render () {
    let info = this.props.gitInfo
    let styles = {
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius:'50%',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px'
      }
    };
    return(
      <div>
        <img src={info.avatar_url} style={styles.img} />
        <p>{info.login}</p>
        <div className='show-git'>
          <p>followers<br />{info.followers}</p>
          <p>following<br />{info.following}</p>
          <p>public_repos<br />{info.public_repos}</p>
        </div>
      </div>
    )
  }
}

export default ShowGit;
