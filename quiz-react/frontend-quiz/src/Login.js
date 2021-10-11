import React from 'react';
import {Link} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Style.scss';
import './App.css';


export default function Login(){
    return( <div className="loginLayout"><h1><Typewriter className='typewriter'
    onInit={(typewriter) => {
  typewriter.typeString('Are you a teacher?')
    .callFunction(() => {
      console.log('String typed out!');
    })
    .pauseFor(1000)
    .deleteAll()
    .typeString("or a student?")
    .deleteAll()
    .start();
}}
/></h1>
    
    <div className='login'>
        <div className='container'>
    <Link to='/teacher' className='btn cta'>Teacher</Link>
    <Link to='/students'className='btn cta'>Students</Link> 
    </div>
      </div></div>)
}