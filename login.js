const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
       },
       lname:{
        type:String,
        required:true
       },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }
}, { collection: 'login' });

module.exports=mongoose.model("login",loginSchema);