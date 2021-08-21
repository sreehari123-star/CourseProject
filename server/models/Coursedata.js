const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MEANStackDB");
const Schema = mongoose.Schema;

var NewCourseSchema = new Schema({
    courseId : String,
    courseName : String,
    courseTitle : String,
    courseSection : String,
    imageUrl : String
});

var Coursedata = mongoose.model('course', NewCourseSchema);

module.exports = Coursedata;