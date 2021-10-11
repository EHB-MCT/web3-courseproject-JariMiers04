'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const teacherQuestions = require("./repos/teacherQuestions");

const app = express();
const router = express.Router();


const { MongoClient } = require('mongodb');
const url = "mongodb+srv://admin:JariMiers04@quiz.etjsy.mongodb.net/quiz?retryWrites=true&w=majority";
const dbName = 'questionsTeacher';
const dbClient = new MongoClient(url);

app.use(cors());

dbClient.connect(()=>{
  console.log("Connected to db");
});


app.use(router);

// async function run() {
//   try {
//     await dbClient.connect();
//     console.log("Connected correctly to server");
//     const db = dbClient.db(dbName);

//     // Use the collection
//     const col = db.collection("questions");

//     // Construct a document                                                                                                                                                              
//     let newQuestion = {
//       "question" : "What is 6*2",
//       "correctAnswer": "12",
//       "wrongAnsers": [
//           "1",
//           "18",
//           "2"
//       ]
//   }

//     // Insert a single document, wait for promise so we can read it back
//     const p = await col.insertOne(newQuestion);
//     // Find one document
//     const myDoc = await col.findOne();
//     // Print to the console
//     console.log(myDoc);

//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await dbClient.close();
//   }
// }

// run().catch(console.dir);


router.route('/').get(async(req, res)=>{
  console.log("this is the index page");
  res.send("Hello, welcome to my index page");
});

router.route('/teacher').post(async(req,res)=>{
  const db = dbClient.db(dbName);

  const collection = db.collection("questions");

  const{question, correctAnswer, wrongAnswer: []} = req.body;
  console.log(req.body);

  let newQuestion = {
    question,
    correctAnswer,
    wrongAnswer
  }

  console.log(newQuestion);

  collection.insertOne(newQuestion);
  res.send(newQuestion);
})

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))

// async function main(){
//   const client = new MongoClient(url);
//   await client.connect();
//   try {   
//     const results = await teacherQuestions.loadData();

//     const getData = await teacherQuestions.get();

//     const newItem = {
//       "question" : "How many students are there in WEB3?",
//       "correctAnswer": "23",
//       "wrongAnsers": [
//           "19",
//           "4",
//           "22"
//       ]
//   };

//   const addItem = await teacherQuestions.add(newItem);

//   } catch (error) {
//     console.log(error);
//   } finally{
//     const admin = client.db('quiz').admin();

//     await client.db('questionsTeacher').dropDatabase();
//     console.log(await admin.listDatabases());
  
//     client.close();
//   }
// }

// main();

// const app = express();
// const router = express.Router();


// // Middleware

// app.use(bodyParser. lencoded({
//   extended: true
// }));

// app.use(bodyParser.json());
// app.use(cors());


// app.use(router);

// router.route('/').get((req, res) => {

//   })


// .post(async(req,res)=>{
//     const db = dbClient.db(dbName);
//     const{question, correctAnswer, wrongAnswers} = req.body;

//     const newQuestion = {
//         question,
//         correctAnswer,
//         wrongAnswers
//     }
// })