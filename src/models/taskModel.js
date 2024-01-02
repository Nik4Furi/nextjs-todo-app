import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:{type:String,required:true},
    description:{type:String,required:true},
    isCompleted:{type:Boolean,default:false}
},{timestamps:true})

mongoose.models = {};

export const taskModel = mongoose.model('Task',taskSchema)