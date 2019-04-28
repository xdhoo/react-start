import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api'
import Home from './pages/home'
import PlaylistDetail from './pages/playlist-detail/playlist-detail';
import Playlist from './pages/playlist'
import TopList from './pages/toplist/toplist'
import { Link, Route, Switch } from 'react-router-dom';
import Artists from './pages/artist/artist';
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <button><Link to="/">Home</Link></button>
          <button><Link to="/playlist">Play list</Link></button>
          <button><Link to="/toplist">Top list</Link></button>
          <button><Link to="/playlist/2109006600">Play List Detail</Link></button>
          <button><Link to="/artists">Artists</Link></button>
        </div>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/playlist" component={Playlist}/>
        <Route exact={true} path="/playlist/:id" component={PlaylistDetail}/>
        <Route exact={true} path="/toplist" component={TopList}/>
        <Route exact={true} path="/artists" component={Artists}></Route>
      </div>
    );
  }
}
export default App;
