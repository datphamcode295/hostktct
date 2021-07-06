
import React, {Component } from 'react';
import firebase from './database/firebase';
import './App.css';

import ScoreTable from './components/scoretable/scoretable'
import HomePage from './components/homepage/homepage';
import Questions from './components/questions/questions';
import { directive } from '@babel/types';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showScore: false,
      start: false,
      question: false
    }
  }
  componentDidMount(){
    var db = firebase.firestore();
    db.collection("show").doc("state")
    .onSnapshot((doc) => {
        //console.log("Current data: ", doc.data());
        this.setState({
          start: doc.data().start, 
          question: doc.data().question, 
          showScore: doc.data().showScore});
        //console.log("props ", this.state.question, this.state.start, this.state.showScore)
    });
  }
  render() {

    return(
    <div className="App">
      {
        this.state.showScore?<ScoreTable></ScoreTable>:this.state.start?<HomePage></HomePage>:this.state.question?<Questions></Questions>:<></>}
       {/* { this.state.home?<HomePage></HomePage>:<></> } */}
        
      
    </div>)
  };
}

export default App;
