const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MEANStackDB");
const Schema = mongoose.Schema;

var NewMentorSchema = new Schema({
    fullName : String,
    email : String,
    contact : Number,
    address : String,
    city : String,
    qualification : String,
    experience : String
});


var Mentordata = mongoose.model('mentor', NewMentorSchema);

module.exports = Mentordata;