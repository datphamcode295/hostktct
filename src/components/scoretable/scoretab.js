
import React, { Component } from 'react';


class ScoreTab extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        //console.log("a");
    }
    render(){
       // console.log("a");
        //
    return(<div> {this.props.children.name} : {this.props.children.score} </div>)
    }
}

export default ScoreTab;