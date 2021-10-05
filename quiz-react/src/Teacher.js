import React from 'react';
import './App.css';


function Teacher(props){
    return <form>
      <h1 className='teacherTitle'>Write your question here</h1>
      <div className = 'teacherForm'>
    <input type="text" placeholder="Write your question here" value="Roses are red violets are blue"></input>
    <input type="text" placeholder="Write the correct answer here" value="NO!"></input>
    <WrongAnswer value="YES"></WrongAnswer>
    <WrongAnswer value="MAYBE"></WrongAnswer>
    <WrongAnswer value="FOR SURE"></WrongAnswer>
  
    {/* <input type='submit'>SEND QUESTION</input> */}
    </div>
    </form>
  }
  
  function WrongAnswer(props){
    return <input type="text" placeholder="Write a wrong answer here" value={props.value}></input>
  }

  export default Teacher;

