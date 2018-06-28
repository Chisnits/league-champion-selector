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
      player1: null,
      player2: null,
      player3: null,
      player4: null,
      player5: null,
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
    if(this.state.activePlayer === "player1"){
      this.setState({
        player1: e.target.getAttribute('src'),
        allySelection: null
      })
    } else if (this.state.activePlayer === "player2"){
      this.setState({
        player2: e.target.getAttribute('src'),
        allySelection: null
      })
    } else if (this.state.activePlayer === "player3"){
      this.setState({
        player3: e.target.getAttribute('src'),
        allySelection: null
      }) 
    } else if (this.state.activePlayer === "player4"){
      this.setState({
        player4: e.target.getAttribute('src'),
        allySelection: null
      })
    } else if (this.state.activePlayer === "player5"){
      this.setState({
        player5: e.target.getAttribute('src'),
        allySelection: null
      })
    }
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
      activePlayer: "player1"
    })
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer - 1 })
    }, 1000);
  }
  componentDidUpdate(){
    if(this.state.activePlayer === "player1" && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: "player2"
      })
    } else if (this.state.activePlayer === "player2" && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: "player3"
      })
    } else if (this.state.activePlayer === "player3" && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: "player4"
      }) 
    } else if (this.state.activePlayer === "player4" && this.state.timer === 0){
      this.setState({
        timer: 5,
        activePlayer: "player5"
      })
    } else if (this.state.activePlayer === "player5" && this.state.timer === 0){
      clearInterval(this.myInterval)
    }
  }
  render() {
    console.log(this.state.allySelection)
    return (
    <div>
      <div className="timer">{this.state.timer}</div>
      <section className="wrapper">
        <section className="allies">
          <div className="player-selector">
            <div className="champion-selected" id="player-1">
              { this.state.allySelection ? 
                (
                  <PlayerSelection 
                    playerSelection = {this.state.player1}
                    activePlayer = {this.state.activePlayer} 
                  /> ):(
                    <CharacterHover
                      player1 = {this.state.player1}
                      activePlayer = {this.state.activePlayer}
                      hover = {this.state.allyHover}
                    />
                )
              }
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-2">
            { this.state.allySelection ? 
                (
                  <PlayerSelection 
                    playerSelection = {this.state.player2}
                    activePlayer = {this.state.activePlayer} 
                  /> ):(
                    <CharacterHover
                      player2 = {this.state.player2}
                      activePlayer = {this.state.activePlayer}
                      hover = {this.state.allyHover}
                    />
                )
              }
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-3">
            { this.state.allySelection ? 
                (
                  <PlayerSelection 
                    playerSelection = {this.state.player3}
                    activePlayer = {this.state.activePlayer} 
                  /> ):(
                    <CharacterHover
                      player3 = {this.state.player3}
                      activePlayer = {this.state.activePlayer}
                      hover = {this.state.allyHover}
                    />
                )
              }
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-4">
            { this.state.allySelection ? 
                (
                  <PlayerSelection 
                    playerSelection = {this.state.player4}
                    activePlayer = {this.state.activePlayer} 
                  /> ):(
                    <CharacterHover
                      player4 = {this.state.player4}
                      activePlayer = {this.state.activePlayer}
                      hover = {this.state.allyHover}
                    />
                )
              }
            </div>
          </div>
          <div className="player-selector">
            <div className="champion-selected" id="player-5">
            { this.state.allySelection ? 
                (
                  <PlayerSelection 
                    playerSelection = {this.state.player5}
                    activePlayer = {this.state.activePlayer} 
                  /> ):(
                    <CharacterHover
                      player5 = {this.state.player5}
                      activePlayer = {this.state.activePlayer}
                      hover = {this.state.allyHover}
                    />
                )
              }
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