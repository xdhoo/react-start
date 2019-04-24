import React, { Component } from 'react';
import api from '../../api/api';
import './playlist-detail.css'

class PlaylistDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  getPlaylistDetail = (id) => {
    api.getPlayListDetail(id).then(res => {
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }

  componentWillMount() {
    this.getPlaylistDetail(this.props.match.params.id)
  }

  render() {
    return (
      <div className="playlist-detail">
        <div className="content">
          <div className="content-l">
            <img src={this.state.data.image}></img>
          </div>
          <div className="content-r">
            <h4>{this.state.data.title}</h4>
            <p className="content-author">
              <img src={this.state.data.author && this.state.data.author.image}></img>
              <strong>{this.state.data.author && this.state.data.author.name}</strong>
              <span>{this.state.data.author && this.state.data.author.createTime}</span>
            </p>
            <p className="content-tags">
              标签：
              {this.state.data.tags && this.state.data.tags.map((item) => {
                return (
                  <span> {item} </span>
                )
              })}
            </p>
            <p dangerouslySetInnerHTML={{__html: this.state.data.description}}></p>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistDetail