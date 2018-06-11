import React, { Component } from 'react';
import './App.css';
import rawChampions from './champions.json';
import firebase from 'firebase';
import {config} from './config';
import {API_KEY, baseURL, getchamps, query} from './config';

class App extends Component {
  constructor(){
    super()

    this.state = {
      data:[],
      champions:[]
    }
  }
  componentWillMount(){
    //initialize firebase
    firebase.initializeApp(config);

    fetch(`${baseURL}${getchamps}${query}&api_key=${API_KEY}`)
      .then((response) => {
        return response.json();
  })
  .then((myJson) =>  {
    this.setState({
      data: myJson.champions
    })
  }).catch(err => {
    console.log(err)
  })
  this.setState({
    data: rawChampions.data
  })
  firebase.database().ref("champions").on('value', (data) => {
    this.setState({
      champions: data.toJSON()
    })
  })

    firebase.database().ref('champions/001').set(
      {
        Aatrox: "id: 266, key: 'Aatrox', name: 'Aatrox', title: 'the Darkin Blade', image: {full: 'Aatrox.png',group:'champion',h:48,sprite:'champion0.png',w:48,x:0,y:0}"
      }
  ).then(() => {
    console.log("inserted")
  }).catch((error) => {
    console.log(error)
  })
  // Aatrox: "id: 266, key: 'Aatrox', name: 'Aatrox', title: 'the Darkin Blade', image: {full: 'Aatrox.png',group:'champion',h:48,sprite:'champion0.png',w:'48',x:0,y:0}"
  }
  componentDidMount(){
  //   let API_KEY = "RGAPI-e92e6be9-6af2-4d29-b04b-eb5524bfd8b8";
  //   let baseURL = "https://na1.api.riotgames.com";
  //   let getchamps = "/lol/static-data/v3/champions";
  //   let query = "?locale=en_US&champListData=image&tags=image&dataById=false"

  //   fetch(`${baseURL}${getchamps}${query}&api_key=${API_KEY}`)
  //     .then((response) => {
  //       return response.json();
  // })
  // .then((myJson) =>  {
  //   this.setState({
  //     data: myJson.champions
  //   })
  // }).catch(err => {
  //   console.log(err)
  // })
  // this.setState({
  //   data: rawChampions.data
  // })
}

  render() {
    console.log(this.state.data);
    console.log(this.state.champions);
    return (
      <div>
      </div>
    );
  }
}

export default App;
