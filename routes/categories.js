const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

router.post('/',CategoryController.insert),
router.get('/',CategoryController.getAll),
router.put('/id/:id',CategoryController.update),
router.delete('/id/:id',CategoryController.delete),
router.get('/id/:id',CategoryController.getById)

module.exports = router;
