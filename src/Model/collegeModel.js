const mongoose=require("mongoose");


const collegeSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please provide college name"],
        trim:true
        
    },
    fullName:{
        type:String,
        required:[true,"Please Provide College full name"],
        trim:true
        
    },
    logoLink:{
        type:String,
        required:[true,"Please provide college logo"],
        trim:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('college',collegeSchema);