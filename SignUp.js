const mongoose = require("mongoose");

const Signup = mongoose.Schema({
    fname:String,
    lname: String,
    email: String,
    password: String
}, { collection: 'signup' })
module.exports = mongoose.model('signup', Signup)