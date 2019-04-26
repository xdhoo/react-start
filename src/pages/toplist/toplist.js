import React, { Component } from 'react'
import api from '../../api/api'
import './toplist.css'

class TopList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      activeList: {}
    }
  }
  componentWillMount() {
    api.getTopList().then(res => {
      this.setState({
        list: res.data
      })
    })
    let topListId = this.props.match.params.id || '19723756'

    api.getTopListDetail(topListId).then(res => {
      this.setState({
        activeList: res.data
      })
    })
  }
  render() {
    return (
      <div className="top-list">
        <div className="top-list-sort">
          {this.state.list.map((item, index) => {
            return(
              <div key={index}>
                <h3>{item.name}</h3>
                <ul>
                  {item.list.map(_item => {
                    return(
                      <li key={_item.name}>
                        <img src={_item.image}></img>
                        <div>
                          <p>{_item.name}</p>
                          <p className="text-muted">{_item.update}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="top-list-content">
          <div className="top-list-content-desc">
            <img src={this.state.activeList.image}></img>
            <div>
              <h3>{this.state.activeList.name}</h3>
              <p>{this.state.activeList.update}</p>
            </div>
          </div>
          <div className="top-list-list">
            <h3>歌曲列表</h3>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>标题</td>
                  <td>歌手</td>
                </tr>
                {this.state.activeList.list && this.state.activeList.list.map(item => {
                  return (
                    <tr>
                      <td><img src={item.album.picUrl + '?param=40y40'}></img></td>
                      <td>{item.name}</td>
                      <td>{item.artists[0].name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default TopList