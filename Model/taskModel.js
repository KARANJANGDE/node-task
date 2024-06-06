//Users should be able to create tasks with a title and description.


const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const taskSchema=new Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    duedate:{
        type:Date,
        required: false,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    }
});

module.exports=mongoose.model('Task',taskSchema);

