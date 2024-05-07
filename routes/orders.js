const express = require('express');
const OrderController = require('../controllers/OrderController');
const { authentication } = require('../middleware/authentication');
const router = express.Router();

router.post('/',authentication,OrderController.create),
router.get('/',authentication,OrderController.getAll),

module.exports = router;