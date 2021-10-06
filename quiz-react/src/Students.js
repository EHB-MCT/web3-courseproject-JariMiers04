import React, { Component } from 'react';
import './App.css';

class Student extends Component{

    // studentView(questionOfTeacher, possibleAnswers){
    //     return <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
    // }

    render(){
        return<>
    <div className='teacherForm'>
        <article>
            <p className='questionInput'>In irure aliqua reprehenderit ullamco irure dolor minim irure Lorem laboris laborum proident sit do. Consequat ea magna reprehenderit Lorem proident pariatur minim velit veniam sint anim ipsum dolore. Dolor voluptate aliquip veniam Lorem ut. Esse adipisicing dolore tempor occaecat duis. Magna aliqua occaecat dolore exercitation minim Lorem. Officia non consectetur aliqua aliqua exercitation in tempor nulla minim labore exercitation magna deserunt. Aliquip aliqua in minim exercitation ex mollit esse amet ad reprehenderit est culpa.</p>
        </article>
    <form>
        <div className="options studentAnswer">
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        <div className="answerStudent"><label for="studentAnswer"><input type='radio' value="studentAnswer"></input>STUDENTANSWER</label></div>
        </div>
            <button type='submit' value="Submit" className='btn cta'>SEND QUESTION</button>
    </form>
    </div>
            </>
    }
}



export default Student