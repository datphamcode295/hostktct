import React, { useState, useEffect } from 'react'
import firebase from '../../database/firebase'

function CountDown(props){

  const [count, setCount] = useState(props.time);
  const [timerOn, setTimerOn] = useState(false);
//  const [check, setCheck]= useState(true);

  let interval = null;
  //let check = false;

  useEffect(()=>{
    setCount(props.time);
    // setCheck(false);
    //console.log("change props");
  },[props])

  useEffect(() => {
    //console.log("1 time");
    if(timerOn && count > 0) {
      //   interval = setInterval(() => {
      //   setCount(count => count - 1);
      //   console.log(count);
      // }, 1000);
      setTimeout(() => {
        setCount(count => count - 1);
        console.log(count);
      }, 1000);
   }
   else {
    //  if(count==0){
      //  console.log("reset")
      //clearInterval(interval)
      // if(count==0){
      
      // setCheck(false);
      // setCount(props.time);
      if(timerOn)
      setTimerOn(false);
      // if(count==0)
      //   setCheck(true);
    }
    //return () => {
     // clearInterval(interval);
    //}
  }, [count, timerOn]);

  const turnOn = () => {
    setTimerOn(true);
      // interval = setInterval(() => {
      //   setCount(count => count - 1);
      //   console.log(count);
      //   if(count==0){
      //     clearInterval(interval)
      //   }
      // }, 1000);
  }

  const showStudentAnswers = ()=>{
      // Add a new document in collection "cities"
    let db = firebase.firestore();
    db.collection("show").doc("state").set({
      studentAnswers:true
     }, { merge: true })
    .then(() => {
     // console.log("Document successfully written!");
    })
    .catch((error) => {
     // console.error("Error writing document: ", error);
    });
    }

  return (
    <div>
      
      <p>{count}</p>    
      {count?(<button onClick={() => turnOn()}>
        Click 
      </button>):<button onClick={() => showStudentAnswers()}>
      Show Student Answers 
    </button>}
      
    </div>
  );
}

export default CountDown;