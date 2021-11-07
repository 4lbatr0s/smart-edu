const express = require('express')
const pageController = require('../controllers/courseController')
const router = express.Router();
//pageRoute icinde pageController ile iligli yönlendirmeleri yapacagaız.

router.route('/').post(courseController.createCourse); //localhost.../courses

module.exports = router;