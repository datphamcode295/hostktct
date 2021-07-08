import React, { Component } from 'react';
import firebase from '../../database/firebase';
import StudentAnswer from './studentAnswer';
import AddButton from './addbutton/addbutton';
import './studentAnswers.css'


class StudentAnswers extends Component{
    constructor(props){
        super(props);
        this.state={
            listAnswer:[],
        }
    }
    
    componentDidMount(){
        let db = firebase.firestore();
        let temp = [];
        db.collection("users").where("show","==", true)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                
                //console.log(doc.id, " => ", doc.data());
                temp=[...temp, {
                    name : doc.data().name,
                    answer : doc.data().answer,
                    id : doc.id,
                    score : doc.data().score

                }]
            });
            if(temp)
            this.setState({listAnswer:[...temp]})
            //console.log("state", this.state.listAnswer)
        })
        .catch((error) => {
            //console.log("Error getting documents: ", error);
        });
        
    }

    

    render(){

        const cancelAnswer = ()=>{
            // Add a new document in collection "cities"
          let db = firebase.firestore();
          db.collection("show").doc("state").set({
            studentAnswers:false
           }, { merge: true })
          .then(() => {
           // console.log("Document successfully written!");
          })
          .catch((error) => {
           // console.error("Error writing document: ", error);
          });
          }
      

        return (
            <div id="containanspopup">

                <div id="answerpopup">
                    <div id="answerlist">
                        {
                            this.state.listAnswer.map((e)=>
                                <div key={e.name}>
                                <StudentAnswer name={e.name} answer={e.answer} key={e.id}></StudentAnswer>
                                <AddButton name={e.id} score={e.score}></AddButton>
                                </div>
                            )
                        }
                    </div>
                    <button id="canclebutton" onClick={cancelAnswer}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default StudentAnswers;
