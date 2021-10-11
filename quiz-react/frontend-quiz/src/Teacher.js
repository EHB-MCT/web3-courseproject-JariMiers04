import React, { Component } from 'react';
import './App.css';
import './Style.scss';


class Teacher extends Component{

  constructor(props){
    super(props)

    this.newQuestion={}
  }

  handleSubmit = async (event) =>{
    event.preventDefault();
    
    const response = await fetch("http://localhost:3000/teacher",{
    body: JSON.stringify(this.newQuestion),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
    });

    const json = await response.json();

    console.log(json);
    // let question = document.getElementById('question').value;
    // let correctAnswer = document.getElementById('correctAnswer').value;
    
    this.newQuestion = {
      question: document.getElementById('question').value,
      correctAnswer: document.getElementById('correctAnswer').value,
      wrongAnswers: [document.getElementById('wrongAnswer1').value,
      document.getElementById('wrongAnswer2').value,
      document.getElementById('wrongAnswer3').value]
    }

    // this.object.push(
    //   question,
    //   correctAnswer,
    //   [document.getElementById('wrongAnswer1').value,
    //   document.getElementById('wrongAnswer2').value,
    //   document.getElementById('wrongAnswer3').value
    // ]
    // )

    console.log(this.newQuestion);
  }

  handleInputChange = (event) =>{
    event.preventDefault();
   
  }
  
  render(){
    // const {question} = this.state;
    return (<form onSubmit={this.handleSubmit} method='POST'>
      <h1 className='teacherTitle'>Write your question here</h1>
      <div className = 'teacherForm'>
    <input type="text" className='questionInput' id='question' placeholder="Write your question here" onChange={this.handleInputChange}></input>
    <div className='options'>
    <input type="text" id='correctAnswer' placeholder="Write the correct answer here"></input>
    <input type="text" id="wrongAnswer1" placeholder="Write a wrong answer here"></input>
    <input type="text" id="wrongAnswer2" placeholder="Write a wrong answer here"></input>
    <input type="text" id="wrongAnswer3" placeholder="Write a wrong answer here"></input>
    {/* <WrongAnswer></WrongAnswer>name='question' 
    <WrongAnswer></WrongAnswer>
    <WrongAnswer></WrongAnswer> */}
    </div>
    <button type='submit' value="Submit" className='btn cta'>SEND QUESTION</button>
    </div>
    </form>)
  }
}
  export default Teacher;

