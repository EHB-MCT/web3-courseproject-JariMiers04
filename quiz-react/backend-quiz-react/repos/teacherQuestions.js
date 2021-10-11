const {MongoClient} = require('mongodb');

function teacherQuestions(){
    const url = "mongodb+srv://admin:JariMiers04@quiz.etjsy.mongodb.net/quiz?retryWrites=true&w=majority";
    function loadData(){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(url);
            try{
              await client.connect();
              const db = client.db('questionsTeacher');

              results = await db.collection('questions').insertOne(
                {
                    "question" : "What is 2*2",
                    "correctAnswer": "4",
                    "wrongAnsers": [
                        "2",
                        "3",
                        "5"
                    ]
                }
            );
              resolve(results);
            }
            catch(err){
                reject(err);
            }
        })
    }

    return{loadData}
}

module.exports = teacherQuestions();