const express = require('express')
const courseController = require('../controllers/courseController')
const router = express.Router();
//pageRoute icinde pageController ile iligli yönlendirmeleri yapacagaız.

router.route('/').post(courseController.createCourse); //localhost.../courses
router.route('/').get(courseController.getAllCourses); //same as above but this time it's a get request.
module.exports = router;