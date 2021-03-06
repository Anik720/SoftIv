const express = require('express');
const examController=require('../controllers/examController')
const authController = require('./../controllers/authController');

const router = express.Router();




router
  .route('/')
   .get(authController.protect, authController.restrictTo('admin','teacher'), examController.getAllExam)
  .post(authController.protect, authController.restrictTo('admin','teacher'),examController.createExam);

// router
//   .route('/:id')
//   .get(teacherController.getTeacher)
//    .patch(teacherController.updateTeacher)
//   .delete(
  
//     teacherController.deleteTeacher
//   );

module.exports = router;