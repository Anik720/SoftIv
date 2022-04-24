const mongoose = require('mongoose');

const  assignmentSchema= new mongoose.Schema({
 deadlines:String,
 marks:Number,

});
const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;