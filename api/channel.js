import mongoose from "mongoose";

const user1Schema= new mongoose.Schema({
        name:{
            type: String,
            required:true,
        }, 
        email:{
            type: String,
            required:true,
            unique: true,
        }, 
        password:{
            type:String,
            default: null,
        }
    }
)
    
// const User=mongoose.model("User",user1Schema)
// module.exports=User1Schema
export default mongoose.model('User1Schema', user1Schema)