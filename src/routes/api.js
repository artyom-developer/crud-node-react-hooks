const express = require('express');
const router = express.Router();
//import controller
const customerController = require('./../controllers/CustomerController');

router.get('/customer/test',customerController.testApi);
router.post('/customer/create', customerController.create);
router.get('/customer/list', customerController.list);
router.get('/customer/get/:id', customerController.get);
router.put('/customer/update/:id', customerController.update);
router.delete('/customer/delete/:id', customerController.delete);

module.exports = router;
