import React, { Component } from 'react';
import './App.css';
import './Style.scss';


class Teacher extends Component{

  constructor(props){
    super(props)

    this.object={}
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    // let question = document.getElementById('question').value;
    // let correctAnswer = document.getElementById('correctAnswer').value;
    
    this.object = {
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

    console.log(this.object);
  }

  handleInputChange = (event) =>{
    event.preventDefault();
   
  }
  
  render(){
    // const {question} = this.state;
    return (<form onSubmit={this.handleSubmit}>
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

