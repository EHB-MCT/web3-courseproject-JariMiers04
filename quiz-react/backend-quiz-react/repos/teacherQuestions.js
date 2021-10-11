const {MongoClient} = require('mongodb');

function teacherQuestions(){
    const url = "mongodb+srv://admin:JariMiers04@quiz.etjsy.mongodb.net/quiz?retryWrites=true&w=majority";
    
    function get(){
        return new Promise (async (resolve, reject)=>{
            const client = new MongoClient(url);
            try{
                await client.connect();
                const db = client.db('questionsTeacher');


                const items = db.collection('questions').find();

                resolve(await items.toArray());
                client.close();
            }catch(err){
                reject(err);
            }
        })
    }

    function add(item){
        return new Promise(async(resolve,reject)=>{
            const client = new MongoClient(url);

            try {
                await client.connect();
                const db = client.db('questionTeacher');
                const addedItem = await db.collection('questions').insertOne(item);

                console.log(addedItem);

                resolve(addedItem)
            } catch (error) {
                reject(error)
            }
        })
    }
    
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
                },
                {
                    "question" : "What is 3*2",
                    "correctAnswer": "6",
                    "wrongAnsers": [
                        "5",
                        "9",
                        "8"
                    ]
                }
            );
              resolve(results);
              client.close();
            }
            catch(err){
                reject(err);
            }
        })
    }

    return{loadData, get, add}
}

module.exports = teacherQuestions();