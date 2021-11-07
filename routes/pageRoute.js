const express = require('express')
const pageController = require('../controllers/pageController')
const router = express.Router();

//pageRoute icinde pageController ile iligli yönlendirmeleri yapacagaız.

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage); 

module.exports = router;