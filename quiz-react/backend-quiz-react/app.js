const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const teacherQuestions = require("./repos/teacherQuestions");
const data = require("./questionExample.json");


const { MongoClient } = require('mongodb');
const url = "mongodb+srv://admin:JariMiers04@quiz.etjsy.mongodb.net/quiz?retryWrites=true&w=majority";


async function main(){
  const client = new MongoClient(url);
  await client.connect();

  const results = await teacherQuestions.loadData(data);
  console.log(results.insertedCount, results.ops)
  const admin = client.db('quiz').admin();
  // console.log(await admin.serverStatus());
  console.log(await admin.listDatabases());
}

main();

// const port = process.env.PORT || 3000;

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