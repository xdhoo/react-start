import React, { Component } from 'react';
import api from '../../api/api'

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
        nav: res.data.nav
      })
    })
  }

  render() {
    return (
      <div className="artists">
        <div className="artists-nav">
          {this.state.nav && this.state.nav.map(nav => {
            return (
              <div>
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
      </div>
    )
  }
}

export default Artists