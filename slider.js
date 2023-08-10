const mongoose = require('mongoose');
const slider = mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String,
    class: String
}, { collection: 'slider' })
module.exports = mongoose.model('slider', slider)