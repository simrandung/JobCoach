const mongoose = require('mongoose');
const About = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
}, { collection: 'about' });

module.exports=mongoose.model("about",About);