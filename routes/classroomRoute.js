const express = require('express');
const classroomController=require('../controllers/classroomController')
const authController = require('./../controllers/authController');

const router = express.Router();

// authController.protect, authController.restrictTo('admin'),


router
  .route('/')
    .get(classroomController.getAllClassroom)
  .post(
    
    classroomController.createClassroom);

// router
//   .route('/:id')
//   .get(teacherController.getTeacher)
//    .patch(teacherController.updateTeacher)
//   .delete(
  
//     teacherController.deleteTeacher
//   );

module.exports = router;
