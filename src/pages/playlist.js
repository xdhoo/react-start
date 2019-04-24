import React, { Component } from 'react';
import api from '../api/api'
import { Link, Route, Switch } from 'react-router-dom';
class Playlist extends Component {

  constructor() {
    super();
    this.state = {
      playList: [],
      topList: [],
      activeList: 1
    }
  }

  componentDidMount() {
    this.getPlayList()
  }

  getPlayList = () => {
    api.getPlayList().then(res => {
      this.setState({
        playList: res.data,
        activeList: 1
      })
    })
  }

  render() {
    return (
      <div className="playlist">
        {this.state.playList.map(item => {
          return (
            <div className="card" key={item.id}>
              <Link to={`/playlist/${item.id}`}>
                <img src={item.img}></img>
              </Link>
              <span className="card-title">{item.title}</span>
              <span className="card-author">by {item.author}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Playlist