const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller')

router.get('/products', ProductController.getAllRecords)
router.get('/products/random', ProductController.getRandomRecord)
router.get('/products/:id', ProductController.getRecordById)
router.post('/products', ProductController.addNewRecord)
router.put('/products/:id', ProductController.editRecord)
router.delete('/products/:id', ProductController.deleteRecord)

module.exports = router;