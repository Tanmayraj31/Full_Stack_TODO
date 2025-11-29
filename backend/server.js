import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoute.js'
import { connectDB } from './config/db.js';
import bodyParser from 'body-parser';
dotenv.config();


const app = express();
app.use(bodyParser.json());


app.get("/", (req, res)=>{
    res.send("hi")
})

app.use("/api/todos", todoRoutes)

app.listen(5000, ()=>{
    connectDB();
    console.log("Server started")
})