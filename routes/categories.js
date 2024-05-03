const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

router.post('/',CategoryController.insert)

module.exports = router;
