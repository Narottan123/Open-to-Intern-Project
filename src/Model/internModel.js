const mongoose=require("mongoose");
const { boolean } = require("webidl-conversions");

const internSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name"],
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"college"
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('Intern',internSchema)