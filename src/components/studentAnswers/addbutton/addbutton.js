import React, { useState } from 'react'
import './addbutton.scss'

function AddButton(props){
    
    const [idStudent, setIdStudent] = useState(props.name);
    const [score, setScore] = useState(props.score);
    const preventIt = (event) => {
        console.log(event.target.attributes.name.nodeValue);

        console.log(event.target.attributes.name.nodeValue);
        const checkbox = '#a'+ event.target.attributes.name.nodeValue;
        const checkedBox = document.querySelector(checkbox);
        console.log(checkedBox);
        checkedBox.checked=!checkedBox.checked;
       
    };
    const preventALink = (e)=>{
        e.preventDefault();


    };

    return(
        <div>
        <nav className="menu">
        <input type="checkbox" href="#"   className="menu-open" name="menu-open" id={'a'+props.name}  />
        <label className="menu-open-button" htmlFor="menu-open" onClick={preventIt} name={props.name}>
            +
        </label>
        
        <a href="#" onClick={preventALink} className="menu-item"> 1 </a>
        
        <a href="#" onClick={preventALink}  className="menu-item"> 2 </a>
        <a href="#" onClick={preventALink} className="menu-item"> 3 </a>
        
        
        </nav>


        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
            <filter id="shadowed-goo">
                
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feComposite in2="shadow" in="goo" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            </defs>
        </svg>
        </div>
    )
}

export default AddButton;