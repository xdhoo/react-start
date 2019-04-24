import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api'
import Home from './pages/home'
import PlaylistDetail from './pages/playlist-detail/playlist-detail';
import Playlist from './pages/playlist'
import { Link, Route, Switch } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/playlist">Play list</Link></button>
          <button><Link to="/playlist/2109006600">Play List Detail</Link></button>
        </div>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/playlist" component={Playlist}/>
        <Route exact={true} path="/playlist/:id" component={PlaylistDetail}/>
      </div>
    );
  }
}
export default App;
