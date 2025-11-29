
import mongoose from "mongoose";
import { boolean } from "zod";

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    completed:{
        type: boolean,
        default: false
    }
},{timestamps: true})

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;