import React, {
  Component
} from 'react';
import './App.css';
import rawChampions from './champions.json';
import './App.css';
import PlayerSelection from './components/PlayerSelection';
import CharacterHover from './components/CharacterHover';

class App extends Component {
  constructor() {
    super()

    this.state = {
      allySelection: null,
      allyHover: null,
      bool: false,
      timer: 5,
      player1: {selection:"player1"},
      player2: {selection:"player2"},
      player3: {selection:"player3"},
      player4: {selection:"player4"},
      player5: {selection:"player5"},
      activePlayer: null
    }
    
    this.getImages = this.getImages.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  getImages(){
    let names = []
    let images = []
    Object.keys(rawChampions.data).forEach((key) => {
      names.push(rawChampions.data[key].image.full)
    })
    for (let i = 0; i < names.sort().length; i++) {
      images.push(<img src={require("./assets/squares/"+names[i])} alt="" className="img-responsive square" key={i} onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut} />  );
    }
        return images
  }
  handleClick(e){
    this.setState({
      allySelection: e.target.getAttribute('src')
    })
  }
  handleHover(e){
    this.setState({
      allyHover: e.target.getAttribute('src')
    })
  }
  handleMouseOut(){
    this.setState({ 
      allyHover: null
    })
  }
  componentDidMount(){
    this.setState({
      activePlayer: this.state.player1
    })
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer - 1 })
    }, 1000);
  }
  componentDidUpdate(){
    if(this.state.activePlayer === this.state.player1 && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: this.state.player2
      })
    } else if (this.state.activePlayer === this.state.player2 && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: this.state.player3
      })
    } else if (this.state.activePlayer === this.state.player3 && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: this.state.player4
      }) 
    } else if (this.state.activePlayer === this.state.player4 && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: this.state.player5
      })
    } else if (this.state.activePlayer === this.state.player5 && this.state.timer === 0){
      clearInterval(this.myInterval)
    }
  }
  render() {
    return (
    <div>
      <div className="timer">{this.state.timer}</div>
      <section className="wrapper">
        <section className="allies">
          <div className="player-selector">
            <div className="champion-selected" id="player-1">
              {
                this.state.allySelection ? (
                  <PlayerSelection 
                    playerSelection = {this.state.allySelection}
                    activePlayer = {this.state.activePlayer} 
                />
                ):(
                  <CharacterHover
                    hover = {this.state.allyHover}
                    activePlayer = {this.state.activePlayer}
                  />
                )
              }
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-2">
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-3">
            
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-4">
            
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-5">
    
            </div>
          </div>
        </section>
        <div className="square-container"> 
          {this.getImages()}
        </div>
        <section className="enemies"></section>
      </section>  
    </div>
  );
  }
}


export default App;