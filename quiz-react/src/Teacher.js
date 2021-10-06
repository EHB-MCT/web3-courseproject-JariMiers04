import React from 'react';
import './App.css';
import './Style.scss';

function Teacher(props){
  return (<form>
      <h1 className='teacherTitle'>Write your question here</h1>
      <div className = 'teacherForm'>
    <input type="text" className='questionInput' placeholder="Write your question here"></input>
    <div className='options'>
    <input type="text" placeholder="Write the correct answer here"></input>
    <WrongAnswer></WrongAnswer>
    <WrongAnswer></WrongAnswer>
    <WrongAnswer></WrongAnswer>
    </div>
    <button type='submit' value="Submit" className='btn cta'>SEND QUESTION</button>
    </div>
    </form>)
  }
  
  function WrongAnswer(props){
    return <input type="text" placeholder="Write a wrong answer here"></input>
  }

  export default Teacher;

