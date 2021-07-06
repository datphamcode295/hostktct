import React, { Component } from 'react';
import firebase from '../../database/firebase';


class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        console.log("home");
        var db = firebase.firestore();
        const startClick= ()=>{
            // Add a new document in collection "cities"
        db.collection("show").doc("state").set({
            question: true,
            showScore: false,
            start: false
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        console.log("checknef");
        }
        return (<div>
            <div>rule</div>
            <button onClick={startClick}>start</button>
        </div>)
    }
}

export default HomePage;