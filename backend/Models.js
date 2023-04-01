import mongoose from "mongoose";


const todoSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true 
    },
    done:{
        type:Boolean,
        default:false 
    },
    time:{
        type:Date,
        default:Date.now 
    }
})

export const todo=mongoose.model('todo',todoSchema)