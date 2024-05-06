const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');


router.post('/', ProductController.create);
router.put('/id/:id', ProductController.update),
router.delete('/id/:id',ProductController.delete),



module.exports = router;