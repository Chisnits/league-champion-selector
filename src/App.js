import React, {
  Component
} from 'react';
import './App.css';
import rawChampions from './champions.json';
import firebase from 'firebase';
import {
  config
} from './config';
// import {API_KEY, baseURL, getchamps, query} from './config';

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      champions: [],
      images: [],
      blobs: []
    }
  }
  componentWillMount() {
    //initialize firebase
    firebase.initializeApp(config);

    firebase.database().ref("champions").on("value", (snapshot) => {
      this.setState({
        champions: snapshot.toJSON()
      })
    })
    firebase.database().ref('champions').set({
      data: rawChampions
    }).then(() => {
      // console.log("inserted")
    }).catch((error) => {
      // console.log(error)
    })
  }

  componentDidMount() {
    let imgstr = this.state.champions.data.data;
    for (let key in imgstr) {
      fetch(`https://ddragon.leagueoflegends.com/cdn/8.12.1/img/champion/${imgstr[key].image.full}`)
        .then((response) => {
          return response.blob()
        })
        .then((myBlob) => {
          let objectURL = URL.createObjectURL(myBlob);
          this.setState({
            images: [...this.state.images, objectURL]
          })
        }).catch(err => {
          console.log(err)
        })
        firebase.database().ref("images").on("value", (snapshot) => {
          this.setState({
            blobs: snapshot
          })
        })

        firebase.database().ref('images').set(
          {
            blobs: this.state.blobs
          }
      ).then(() => {
        console.log("inserted")
      }).catch((error) => {
        console.log(error)
      })
    }

    this.setState({
      data: rawChampions.data
    })
  }
  render() {
    let champSquares = this.state.images.map((item, i) => ( 
    <span key={i}> <img src = {item} alt = "champion squares" /> </span>
    ))
    return ( 
    <div> 
      {champSquares} 
    </div>
    );
  }
}


export default App;