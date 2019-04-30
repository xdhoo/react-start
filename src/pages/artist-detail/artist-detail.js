import React, { Component } from 'react'
import api from '../../api/api'
import './artist-detail.scss'

class ArtistDetail extends Component {
  constructor() {
    super()
    this.state = {
      artist: {}
    }
  }

  componentWillMount() {
    api.getArtistDetail(this.props.match.params.id).then(res => {
      this.setState({
        artist: res.data
      })
    })
  }

  render() {
    return (
      <div className="artist-detail">
        <div className="artist-detail-desc">
          <h3>{this.state.artist.name}</h3>
          <img src={this.state.artist.image}></img>
        </div>
        <div className="artist-detail-song-list">
          <table>
            <tbody>
              {this.state.artist.hotSong && this.state.artist.hotSong.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.album.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ArtistDetail