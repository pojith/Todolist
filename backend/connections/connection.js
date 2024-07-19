require('dotenv').config();
const  mongoose =require('mongoose')

const connectDb=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("connected")
    }
    catch(erros){
        console.error(erros.message)
        process.exit(1)
    }
}
module.exports=connectDb
