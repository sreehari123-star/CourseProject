const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MEANStackDB");
const Schema = mongoose.Schema;

var NewStatusSchema = new Schema({
    studName : String,
    studEmail : String,
    studStatus : String,
    studIcon : String
});

var Statusdata = mongoose.model('status', NewStatusSchema);

module.exports = Statusdata;