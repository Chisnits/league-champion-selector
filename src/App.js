import React, {
  Component
} from 'react';
import './App.css';
import rawChampions from './champions.json';
import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.getImages = this.getImages.bind(this);
  }
  getImages(){
    let names = []
    let images = []
    Object.keys(rawChampions.data).forEach((key) => {
      names.push(rawChampions.data[key].image.full)
    })
    for (let i = 0; i < names.sort().length; i++) {
      images.push(<img src={require("./assets/squares/"+names[i])} alt="" className="img-responsive" key={i} />  );
    }
        return images
  }

  render() {
    return ( 
    <div className="wrapper">
      <div className="square-container"> 
        {this.getImages()}
      </div>
    </div>);
  }
}


export default App;