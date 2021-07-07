import React, { useEffect, useState } from 'react';

function Question (props){
    //console.log(props);
    let [question, setQuestion] = useState(props.children.question);
    useEffect(()=>{
        setQuestion(props.children.question)
    },[props])

    return (
        <div> 
            {question}
        </div>
    )
}

export default Question;