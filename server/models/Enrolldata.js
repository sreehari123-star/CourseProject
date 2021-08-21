const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MEANStackDB");
const Schema = mongoose.Schema;

var NewEnrollSchema = new Schema({
    name : String,
    email : String,
    contact : Number,
    qualification : String,
    coursename : String
});

var Enrolldata = mongoose.model('enroll', NewEnrollSchema);

module.exports = Enrolldata;