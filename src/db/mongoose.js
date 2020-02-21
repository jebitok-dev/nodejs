const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Mike',
//     age: 25
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error);
// })

//Task', description: string and completed: boolean
//learn how to mongoose, true/false
//save;

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task = new Task({
    description: 'Learn how to mongoose',
    completed: false
});
task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
});