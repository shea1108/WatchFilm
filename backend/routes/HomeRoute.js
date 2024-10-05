const path = require('path');
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');


router.get('/home', homeController.index);

module.exports = router;
