const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/department.controller')

router.get('/departments', DepartmentController.getAllRecords)
router.get('/departments/random', DepartmentController.getRandomRecord)
router.get('/departments/:id', DepartmentController.getRecordById)
router.post('/departments', DepartmentController.addNewRecord)
router.put('/departments/:id', DepartmentController.editRecord)
router.delete('/departments/:id', DepartmentController.deleteRecord)

module.exports = router;