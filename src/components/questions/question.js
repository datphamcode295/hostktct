import React from 'react';
import CountDown from './countdown';

function Question (props){
    //console.log(props);
    return (
        <div> 
            {props.children.question}
            <CountDown time={2}></CountDown>
        
        </div>
    )
}

export default Question;