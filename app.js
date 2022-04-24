const path = require('path');
const express = require('express');
const teacherRoutes=require('./routes/teacherRoute')
const classroomRoutes=require('./routes/classroomRoute')
const assignmentRoutes=require('./routes/assignmentRoutes')
const examRoutes=require('./routes/examRoutes')
const resultRoutes=require('./routes/resultRoutes')
const studentRoutes=require('./routes/studentRoutes')
const userRoutes=require('./routes/userRoutes')





const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());




app.use('/api/v1/teacher', teacherRoutes);
app.use('/api/v1/classroom', classroomRoutes);
app.use('/api/v1/assignment', assignmentRoutes);
app.use('/api/v1/exam', examRoutes);
app.use('/api/v1/result', resultRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;