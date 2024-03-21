import express, { request, response } from "express";
import {PORT,MongoDBURL} from './config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("welcome to mern stack course")
})

app.use('/book',booksRoute);

mongoose.connect(MongoDBURL)
    .then(()=>{
        console.log("database connected successfully");
        app.listen(PORT,()=>{
            console.log(`App is listening to port : ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })