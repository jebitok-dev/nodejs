const {MongoClient, ObjectID} = require('mongodb');
//const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    //console.log("Connection Succesful");
    const db = client.db(databaseName);

    // db.collection('users').findOne({_id: new ObjectID("5e4f8b1828c46d1c3a52779f")}, (error, user) => {
    //      if(error) {
    //         return console.log('Unable to fetch user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').insertOne({
    //     name: 'Jebitok',
    //     city: 'Nandi'
    // });
    db.collection('tasks').insertMany([
        {
            description: 'Exercises',
            completed: true
        },
        {
            description: 'Watch pro sports',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks')
        }
        console.log(result);
    })    
});
