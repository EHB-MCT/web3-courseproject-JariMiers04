import './App.css';
// import './Style.scss';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Question></Question>
      <form>
      <section>
      <p>Sint magna et dolor fugiat aute ullamco aliqua cillum labore veniam. Aliqua dolor aliquip veniam nulla do ad veniam. Lorem exercitation pariatur tempor sunt exercitation amet tempor aliquip sunt fugiat minim exercitation. Veniam sunt mollit est est voluptate. Minim ea aute qui id in velit aute exercitation laborum nulla. Ullamco nulla consequat do eu enim ex laborum fugiat velit anim ipsum officia ad voluptate. Irure officia eiusmod eu commodo non cillum.</p>
      </section>
      <div className="flex">
      <div className="studentAnswer">
      <StudentView></StudentView>
      </div>
      <div className="studentAnswer">
      <StudentView></StudentView>
      </div>
      <div className="studentAnswer">
      <StudentView></StudentView>
      </div>
      <div className="studentAnswer">
      <StudentView></StudentView>
      </div>
      </div>
      {/* <StudentView></StudentView>
      <StudentView></StudentView>
      <StudentView></StudentView> */}
      </form>
    </div>
  );
}

function Login(){
  return <><h1>I am a...</h1><form>
    <div className='login'>
    <input type="button" placeholder="Teacher" value="Teacher" className='button'></input>
    <input type="button" placeholder="Students" value="Student" className='button'></input>
    </div>
  </form></>
}

function Question(props){
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


function StudentView(questionOfTeacher, possibleAnswers){
    return <><input type='radio' value="studentAnswer"></input><label for="studentAnswer">studentAnswer</label></>
}

export default App;
