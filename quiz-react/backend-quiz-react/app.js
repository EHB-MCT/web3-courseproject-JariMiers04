const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  MongoClient
} = require('mongodb');

const port = process.env.PORT || 3000;

const app = express();
const router = express.Router();


// Middleware

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());


const uri = "mongodb+srv://admin:admin@cluster0.gvz9r.mongodb.net/?retryWrites=true&w=majority";
const dbClient = MongoClient(uri, {
  useUnifiedTopology: true
});
const dbName = "quiz";

dbClient.connect(() => {
  console.log("Connected to database");
});

app.use(router);

router.route('/').get((req, res) => {

  })


.post(async(req,res)=>{
    const db = dbClient.db(dbName);
    const{question, correctAnswer, wrongAnswers} = req.body;

    const newQuestion = {
        question,
        correctAnswer,
        wrongAnswers
    }
})