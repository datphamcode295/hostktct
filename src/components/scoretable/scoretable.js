import React, { Component } from 'react';
import Temp from '../temp/temp'
import firebase from '../../database/firebase';
import ScoreTab from './scoretab';

class ScoreTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: []
        }
    }
    
    componentWillMount(){
        var db = firebase.firestore();
        db.collection("users").where("show", "==", true)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(this.state.score);
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().name);
                    this.setState({score: [...this.state.score, {
                        name: doc.data().name,
                        score: doc.data().score
                    }]})
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
      //  console.log(this.state.score);
        
    }
    
    render() {
        //console.log("1");
        
        return(
            <div>
                
                {this.state.score.map(user=>
                <ScoreTab key={user.name}>{user}</ScoreTab>
                )}
                
            </div>
        )
    }
}

export default ScoreTable;