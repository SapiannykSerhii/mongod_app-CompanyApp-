const Employee = require('../models/employee.model');


exports.getAllRecords = async (req, res) => {
  try {
    res.json(await Employee.find().populate('department'));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandomRecord = async (req, res) => {
  try {
    const count = await Employee.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const emp = await Employee.findOne().skip(rand);
    if (!emp) res.status(404).json({ message: 'Not found' });
    else res.json(emp);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRecordById = async (req, res) => {

  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) res.status(404).json({ message: 'Not found' });
    else res.json(emp);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addNewRecord = async (req, res) => {
  const { firstName, lastName, department } = req.body;

  try {
    
    const newEmployee = new Employee({
      firstName: firstName, lastName: lastName, department: department,
    });
    await newEmployee.save();
    res.json({ message: 'Ok' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};


exports.editRecord = async (req, res) => {
  const { firstName, lastName, department } = req.body;

  try {
    
    const emp = await Employee.findById(req.params.id);
    if (emp) {
      await Employee.updateOne(
        { _id: req.params.id },
        {$set: { firstName: firstName, lastName: lastName, department: department },}
      );
      res.json({ message: 'Ok' });
    } else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};


exports.deleteRecord = async (req, res) => {

  try {
    const emp = await Employee.findById(req.params.id);
    if (emp) {
      await Employee.remove(emp);
      res.json({ message: 'Ok' });
    } else res.status(404).json({ message: 'Not Found ...' });
  } catch (err) {
    req.status(500).json({ message: err });
  }
};