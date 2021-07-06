import React, { useState } from 'react'

function CountDown(props){
    
    // const [count, setCount] = useState(2);
    
    // var timeInterval;
    // const timefunction = () => {
    //     if(count){
    //         setCount(count - 1);
    //         console.log(count);
    //     }
    //     else {
    //         clearInterval(timeInterval);
    //     }}
    // const handleClickTime = () => {timeInterval = setInterval(timefunction, 1000);}
    // if(count==0)
    // // console.log("a");
    // clearInterval(timeInterval);
    // return (<div>
        
    //         {count}
    //         <button onClick={handleClickTime}>Click!!!</button>
    // </div>)

let timeout = 0
const [count, setCount] = useState(2);
const  handleTiming = ()=>{
    timeout = setInterval(() => {
        if(count){

            setCount(count - 1);
            console.log(count);
        }
        
        
    }, 1000);
    if(Interval(timeout);
}

return (
  <div>
    <p>{count}</p>
    <button onClick={handleTiming}>
      Click 
    </button>
  </div>
);
}

export default CountDown;