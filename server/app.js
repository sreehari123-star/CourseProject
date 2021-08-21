require('./config/config');
require('./models/db');
require('./config/passportConfig');

const StatusData = require('../server/models/Statusdata');
const MentorData = require('../server/models/Mentordata');
const EnrollData = require('../server/models/Enrolldata');
const CourseData = require('../server/models/Coursedata');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const rtsIndex = require('./routes/index.router');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

//error handler
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


username = "admin"
password = "1234"

function verifyToken(req, res, next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split('')[1]
    if(token == 'null')
    {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    console.log(payload)
    if(!payload)
    {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

app.post('/mentorsignin', (req, res) => {
    let userData = req.body
    if(!username) {
        res.status(401).send('Invalid Username')
    } else 
    if(password !== userData.password) {
        res.status(401).send('Invalid Password')
    } else {
        let payload = {subject:username+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    }
})

app.get('/status', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    StatusData.find()
                .then(function(status){
                    res.send(status);
                });
});


app.get('/mentor', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    MentorData.find()
                .then(function(mentor){
                    res.send(mentor);
                });
});

app.get('/enroll', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    EnrollData.find()
                .then(function(enroll){
                    res.send(enroll);
                });
});

app.get('/course', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    CourseData.find()
                .then(function(course){
                    res.send(course);
                });
});

app.post('/mentorsignup', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var mentor = {
        fullName : req.body.mentor.fullName,
        email : req.body.mentor.email,
        contact : req.body.mentor.contact,
        address : req.body.mentor.address,
        city : req.body.mentor.city,
        qualification : req.body.mentor.qualification,
        experience : req.body.mentor.experience
    }
    var mentor = new MentorData(mentor);
    mentor.save();
});

app.post('/addenroll', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var enroll = {
        name : req.body.enroll.name,
        email : req.body.enroll.email,
        contact : req.body.enroll.contact,
        qualification : req.body.enroll.qualification,
        coursename : req.body.enroll.coursename
    }
    var enroll = new EnrollData(enroll);
    enroll.save();
});

app.post('/addstatus', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var status = {
        studName : req.body.status.studName,
        studEmail : req.body.status.studEmail,
        studStatus : req.body.status.studStatus,
        studIcon : req.body.status.studIcon
    }
    var status = new StatusData(status);
    status.save();
});

app.post('/addcourse', function(req, res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var course = {
        courseId : req.body.course.courseId,
        courseName : req.body.course.courseName,
        courseTitle : req.body.course.courseTitle,
        courseSection : req.body.course.courseSection,
        imageUrl : req.body.course.imageUrl
    }
    var course = new CourseData(course);
    course.save();
});

app.delete('/remove/:id',(req,res)=>{
    id = req.params.id;
    EnrollData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success');
        res.send();
    });
  });

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));