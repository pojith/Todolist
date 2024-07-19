const mongoose=require('mongoose')

const Fileschema = new mongoose.Schema(
    {
        filename:{type:String, required:true,unique:true},
        path:{types:String, requird:true} ,
        userId:{type: mongoose.Schema.Types.ObjectId,ref:'Userdata'}
    })
const filedata=mongoose.model(filedata,Fileschema)

module.exports=filedata
