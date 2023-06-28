import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Square component class
// class Square extends React.Component {
  
//     render() {
//       return (
//         <button 
//           className="square"
//           onClick={this.props.onClick}
//           // onClick={()=>{this.setState({value: this.props.value})}}
//         >
//           {this.props.value}
//         </button>
  
//       );
//     }
// }

//Square function component
function Square(props){
  return (
    <button 
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );  
}
  
class Board extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      player:null
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    let player = this.state.player;
    
    if(this.state.player===null || player===1){
      squares[i] = 'X';
      player=2;
      console.log("old state:", this.state);
      this.setState({squares: squares, player: player}, () => {
        console.log("New state:", this.state);
      });
    }else{
      squares[i] = 'O';
      player=1;
      console.log("old state:", this.state);
      this.setState({squares: squares, player: player}, () => {
        console.log("New state:", this.state);
      })
    }
  }
  
  renderSquare(i) {
    return <Square 
                  value={this.state.squares[i]} 
                  onClick={() => this.handleClick(i)}
                  />; //value={i}
    }

  render() {
    let nextPlayer = this.state.player===null || this.state.player===1?'X':'O'
    const status = `Next player: ${nextPlayer}`;
    console.log('Board: ',this.state)
    
    return (
      <div>
        <div className="status">Status: {status}</div>
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
    );
  }
}
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Game />
  //</React.StrictMode>
);
