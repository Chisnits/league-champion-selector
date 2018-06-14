import React, { Component } from 'react';
import './App.css';
import rawChampions from './champions.json';
import firebase from 'firebase';
import {config} from './config';
// import {API_KEY, baseURL, getchamps, query} from './config';

class App extends Component {
  constructor(){
    super()

    this.state = {
      data:[],
      champions:[],
      images: []
    }
  }
  componentWillMount(){
    //initialize firebase
    firebase.initializeApp(config);

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
  firebase.database().ref("champions").on("value", (snapshot) => {
    this.setState({
      champions: snapshot.toJSON()
    })
  })
    firebase.database().ref('champions').set(
      {
        data: rawChampions
      }
  ).then(() => {
    // console.log("inserted")
  }).catch((error) => {
    // console.log(error)
  })
  }
  componentDidMount(){
    let myImage = document.querySelector('img');
    let imgstr = this.state.champions.data.data;
    for(let key in imgstr){
      fetch(`https://ddragon.leagueoflegends.com/cdn/8.12.1/img/champion/${imgstr[key].image.full}`)
      .then((response) => {
        // console.log(response.blob())
        return response.blob()
      })
      .then((myBlob) =>  {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
        // console.log(imageArr)
        this.setState({
          images: [...this.state.images, objectURL]
        })
          // console.log(myImage.src)
        //   firebase.database().ref("images").on("value", (snapshot) => {
        //     this.setState({
        //       images: snapshot
        //     })
        //   })

        //   firebase.database().ref('images').set(
        //     {
        //       images: myBlob
        //     }
        // ).then(() => {
        //   console.log("inserted")
        // }).catch((error) => {
        //   console.log(error)
        // })
          
        }).catch(err => {
          console.log(err)
        })
    }
 
  this.setState({
    data: rawChampions.data
  })
    
  }
  render() {
    console.log(this.state.images)
    let arr = this.state.images.map( (item,i)=> (
          <div><img src={item} /></div>
  ))
    return (
      <div>
        {arr}
        <img className="img" />
      </div>
    );
  }
}

export default App;
