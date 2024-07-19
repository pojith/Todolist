const mongoose=require('mongoose')
const schema = mongoose.Schema
const Userschema = new schema(
    {
        username:{type:String, required:true,unique:true},
        password:{type:String, requird:true} 
    })
const userdata=mongoose.model("userdata",Userschema)

const p1=async()=>{
    const o = new userdata({username:"pojith123"})
    console.log(await o.save());
    console.log(await userdata.find())
}
module.exports={userdata,p1}


