import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoute.js'
import { connectDB } from './config/db.js';
import bodyParser from 'body-parser';
import cors from "cors";

dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/todos", todoRoutes)

app.listen(5000,"0.0.0.0", ()=>{
    connectDB();
    console.log("Server started")
})