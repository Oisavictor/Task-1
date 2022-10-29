const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create info Schema and model
const InfoSchema = new Schema({
    slackUsername: {
        type: String,
        required: [true, "Username is required"],
        unique:true,
    }, 
    backend:{
        type: Boolean,
        default: true
    }, 
    age: {
        type: Number,
        min: 18,
        max: 65
    }, 
    bio: {
        type: String,
        required: true
    }
})

const Info = mongoose.model('info', InfoSchema);

module.exports = Info