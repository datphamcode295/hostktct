
import React, {Component } from 'react';
import firebase from './database/firebase';
import './App.css';

import ScoreTable from './components/scoretable/scoretable'
import HomePage from './components/homepage/homepage';
import Questions from './components/questions/questions';
import { directive } from '@babel/types';
import StudentAnswers from './components/studentAnswers/studentAnswers';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showScore: false,
      start: false,
      question: false,
      studentAnswers: false
    }
  }
  componentDidMount(){
    var db = firebase.firestore();
    db.collection("show").doc("state")
    .onSnapshot((doc) => {
        //console.log("Current data: ", doc.data());
        if(doc.data().start!=this.state.start)
          this.setState({start: doc.data().start});
        if(doc.data().question!=this.state.question)
        {
          console.log("a");
          this.setState({question: doc.data().question});
        }
        if(doc.data().showScore!=this.state.showScore)
          this.setState({showScore: doc.data().showScore});
        if(doc.data().studentAnswers!=this.state.studentAnswers)
          this.setState({studentAnswers: doc.data().studentAnswers});
        
    //     this.setState({
    //       start: doc.data().start, 
    //       question: doc.data().question, 
    //       showScore: doc.data().showScore,
    //       studentAnswers: doc.data().studentAnswers});
    //     //console.log("props ", this.state.question, this.state.start, this.state.showScore)
    });
  }
  render() {

    return(
    <div className="App">
      {
        this.state.showScore?<ScoreTable></ScoreTable>:this.state.start?<HomePage></HomePage>:this.state.question?<Questions></Questions>:<></>}
       {/* { this.state.home?<HomePage></HomePage>:<></> } */}
        {this.state.studentAnswers?<StudentAnswers></StudentAnswers>:<></>}
    </div>)
  };
}

export default App;
