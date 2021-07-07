import React from 'react';

function StudentAnswer (props){

   // console.log("props",props.name);
    return <div>{props.name}:{props.answer}</div>
}

export default StudentAnswer;
