import React, { Component } from 'react';
// import { useEffect, useState } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import './App.css';

class Student extends Component{

    constructor(props){
        super(props)
        
    }

    callApi(){
        fetch("http://localhost:3000/teacher").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse =>console.log(jsonResponse));
    }

    handleSubmit = (event) =>{
        event.preventDefault();
    }

    handleInputChange = () =>{
        
    }

    // studentView(questionOfTeacher, possibleAnswers){
    //     return <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
    // }

    render(){
        return<>
    <div className='teacherForm'>
        <article>
            <p className='questionInput'>In irure aliqua reprehenderit ullamco irure dolor minim irure Lorem laboris laborum proident sit do. Consequat ea magna reprehenderit Lorem proident pariatur minim velit veniam sint anim ipsum dolore. Dolor voluptate aliquip veniam Lorem ut. Esse adipisicing dolore tempor occaecat duis. Magna aliqua occaecat dolore exercitation minim Lorem. Officia non consectetur aliqua aliqua exercitation in tempor nulla minim labore exercitation magna deserunt. Aliquip aliqua in minim exercitation ex mollit esse amet ad reprehenderit est culpa.</p>
            {/* <p>{this.state.response}</p> */}
        </article>
    <form onSubmit={this.handleSubmit}>
        <div className="options studentAnswer">
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        </div>
            <button type='submit' value="Submit" className='btn cta'>VALIDATE answer</button>
    </form>
    <ReactCountdownClock seconds={30} color="#fff"
                     alpha={0.9}
                     size={300} paused={false}/>
    </div>
            </>
    }
}


export default Student