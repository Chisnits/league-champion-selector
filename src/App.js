import React, {
  Component
} from 'react';
import './App.css';
import rawChampions from './champions.json';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      allySelection: null
    }
    
    this.getImages = this.getImages.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getImages(){
    let names = []
    let images = []
    Object.keys(rawChampions.data).forEach((key) => {
      names.push(rawChampions.data[key].image.full)
    })
    for (let i = 0; i < names.sort().length; i++) {
      images.push(<img src={require("./assets/squares/"+names[i])} alt="" className="img-responsive square" key={i} onClick={this.handleClick} />  );
    }
        return images
  }
  handleClick(e){
    this.setState({
      allySelection: e.target.getAttribute('src')
    })
  }

  render() {
    console.log(this.state.allySelection)
    return ( 
    <div className="wrapper">
      <section className="allies">
        <div className="player-selector">
          <div className="champion-selected"><img src={this.state.allySelection} className="image-reponsive"/></div>
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