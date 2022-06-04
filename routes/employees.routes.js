const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employees.controller')

router.get('/employees', EmployeeController.getAllRecords)
router.get('/employees/random', EmployeeController.getRandomRecord)
router.get('/employees/:id', EmployeeController.getRecordById)
router.post('/employees', EmployeeController.addNewRecord)
router.put('/employees/:id', EmployeeController.editRecord)
router.delete('/employees/:id', EmployeeController.deleteRecord)

module.exports = router;