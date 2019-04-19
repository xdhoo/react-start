import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Game></Game>
        </header>
      </div>
    );
  }
}


function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

class Board extends Component {

  constructor () {
    super()
    this.state = {
      square: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return <Square 
    value={this.props.square[i]} 
    onClick={() => this.props.onClick(i)}
    />;
  }
  render () {

    const status = 'Next player: X'
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
} 

class Game extends Component {
  constructor () {
    super();
    this.state = {
      history: [{
        square: Array(9).fill(null)
      }],
      xIsNext: true
    }
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const square = current.square.slice();
    if(this.calculateWinner(square) || square[i]) {
      return;
    }
    square[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        square: square
      }]),
      xIsNext: !this.state.xIsNext
    })
  }
  render () {
    const history = this.state.history;
    const current = history[history.length - 1];
    return (
      <div className="game">
        <div className="game-board">
          <Board
            square={current.square}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div></div>
        </div>
      </div>
    )
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
export default App;
