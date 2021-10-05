import React from 'react';
import './App.css';

function StudentView(questionOfTeacher, possibleAnswers){
    return <><input type='radio' value="studentAnswer"></input><label for="studentAnswer">studentAnswer</label></>
}

function Student(){
    return<><section>
        <p>Sint magna et dolor fugiat aute ullamco aliqua cillum labore veniam. Aliqua dolor aliquip veniam nulla do ad veniam. Lorem exercitation pariatur tempor sunt exercitation amet tempor aliquip sunt fugiat minim exercitation. Veniam sunt mollit est est voluptate. Minim ea aute qui id in velit aute exercitation laborum nulla. Ullamco nulla consequat do eu enim ex laborum fugiat velit anim ipsum officia ad voluptate. Irure officia eiusmod eu commodo non cillum.</p>
    </section><div className="flex">
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
        </div></>
}



export default Student