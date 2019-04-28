import React, { Component } from 'react';
import api from '../../api/api'
import './artist.scss'
class Artists extends Component {
  constructor () {
    super()
    this.state = {
      nav: [],
      artists: []
    }
  }

  componentWillMount() {
    api.getArtists().then(res => {
      this.setState({
        nav: res.data.nav,
        artists: res.data.artists
      })
    })
  }

  render() {
    return (
      <div className="artists">
        <div className="artists-nav">
          {this.state.nav && this.state.nav.map(nav => {
            return (
              <div className="artists-nav-block">
                <h3>{nav.title}</h3>
                <ul>
                  {nav.items.map(_item => {
                    return (
                      <li>{_item.name}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="artists-list">
          {this.state.artists.map(item => {
            return (
              <div className="artists-list-card">
                <img alt={item.title} src={item.img}></img>
                <p>
                  <span className="artists-list-card-title">{item.title}</span>
                  <span className="artists-list-card-author">by {item.author}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Artists