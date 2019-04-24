import React, { Component } from 'react';
import api from '../api/api'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playList: [],
      topList: [],
      activeList: 1
    }
  }
  getPlayList = () => {
    api.getPlayList().then(res => {
      console.log(res)
      this.setState({
        playList: res.data,
        activeList: 1
      })
    })
  }

  getTopList = () => {
    api.getTopList().then(res => {
      this.setState({
        topList: res.data,
        activeList: 2
      })
    })
  }
  componentDidMount() {
    // this.getPlayList();
  }
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <button onClick = {this.getPlayList}> GET PLAY LIST </button>
          <button onClick = {this.getTopList}> GET TOP LIST </button>
        </header>
        {this.state.activeList == 1 ? (
          this.state.playList.map(item => {
            return (
              <div className="card">
                <img src={item.img}></img>
                <span className="card-title">{item.title}</span>
                <span className="card-author">by {item.author}</span>
              </div>
            )
          })
        ) : (
            <div className="list">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>标题</th>
                    <th>歌手</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.topList.map(item => {
                  return (
                    <tr>
                      <td><img className="album-img" src={item.album.picUrl + '?param=50y50&quality=100'}></img></td>
                      <td>{item.name}</td>
                      <td>{item.artists[0].name}</td>
                    </tr>
                  )                  
                })}
                </tbody>
              </table>
            </div>
          )}
      </div>
    );
  }
}

export default Home