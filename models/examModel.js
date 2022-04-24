const mongoose = require('mongoose');

const  examSchema= new mongoose.Schema({
 deadlines:String,
 marks:Number,

},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;