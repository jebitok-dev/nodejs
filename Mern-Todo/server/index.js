import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
const mongodb = "mongodb+srv://todoapp:todoapp@nodetut.qxwvl.mongodb.net/todoapp?retryWrites=true&w=majoritymongodb+srv://todoapp:todoapp@nodetut.qxwvl.mongodb.net/todoapp?retryWrites=true&w=majority"
app.get('/',(req,res) => {
    res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000
mongoose.connect(mongodb).then(() => console.log(`server is running on port ${PORT}`)).catch(err => console.log(err))