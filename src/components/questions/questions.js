import { directive } from '@babel/types';
import React, { Component } from 'react';
import firebase from '../../database/firebase';
import Question from './question';

class Questions extends Component {
    constructor(props){
        super(props);
        this.state = {
            listQuestion: [],
            id:1
        }
    }
    componentDidMount(){
        var db = firebase.firestore();
        db.collection("questions").where("question", "!=", null)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                this.setState({listQuestion: [...this.state.listQuestion,{
                    question: doc.data().question,
                    answer: doc.data().answer,
                    id: doc.id
                }]});
             //  console.log(this.state.listQuestion);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });      
    }

    render(){
        const handleClick = (e)=>{
        
           // console.log(e.target.id);
            this.setState({id: e.target.id})
           // console.log("id ne", this.state.id);

        }
        let id = this.state.id;
        //console.log(this.state.listQuestion[0])
        return(<div>
            {this.state.listQuestion[id]?<Question >{this.state.listQuestion[id]}</Question>:<span>loading...</span>}
            <button id="0" onClick={handleClick}>1</button>
            <button id="1" onClick={handleClick}>2</button>
            <button id="2" onClick={handleClick}>3</button>

        </div>)
    }
}

export default Questions;