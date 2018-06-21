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
      bool: false
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
      allySelection: e.target.getAttribute('src'),
    })
  }
  handleHover(e){
    this.setState({
      allyHover: e.target.getAttribute('src'),
      bool: true
    })
  }
  handleMouseOut(e){
    this.setState({ 
      allyHover: null,
      bool: false 
    })
  }

  render() {
    return ( 
    <div className="wrapper">
      <section className="allies">
        <div className="player-selector">
          <div className="champion-selected">
            {
              this.state.allySelection ? (
                <PlayerSelection 
                  playerSelection = {this.state.allySelection} 
              />
              ):(
                <CharacterHover
                  hover = {this.state.allyHover}
                />
              )
            }
          </div>
        </div>
        <div className="player-selector">
          <div className="champion-selected">
          
          </div>
        </div>
        <div className="player-selector">
          <div className="champion-selected"></div>
        </div>
        <div className="player-selector">
          <div className="champion-selected"></div>
        </div>
        <div className="player-selector">
          <div className="champion-selected"></div>
        </div>
      </section>
      <div className="square-container"> 
        {this.getImages()}
      </div>
      <section className="enemies"></section>
    </div>);
  }
}


export default App;