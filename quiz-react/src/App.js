import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Teacher from './Teacher'; 
import Student from './Students';
import Login from './Login';
import './App.css';
// import './Style.scss';

// let QUESTIONANDANSWERS = [];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" >
            <Login></Login>
          </Route>
          <Route exact path="/teacher" >
            <Teacher></Teacher>
          </Route>
          <Route exact path="/students">
            <Student></Student>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// QUESTIONANDANSWERS.push({question: document.getElementById("question").value,
// correctAnswer: document.getElementById("correctAnswer").value,
// wrongAnswer: document.getElementById("wrongAnswer").value,
// })

export default App;
