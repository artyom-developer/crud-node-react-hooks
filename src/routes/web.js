const express = require('express');
const router = express.Router();
//import controller
const customerController = require('./../controllers/CustomerController');

router.get('/customer/index',customerController.index);
router.get('/customer/form',customerController.index);
router.get('/customer/list',customerController.index);
router.get('/customer/edit/:id',customerController.index);

module.exports = router;
