const Product = require('../models/product.model');

exports.getAllRecords = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandomRecord = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const prod = await Product.findOne().skip(rand);
    if (!prod) res.status(404).json({ message: 'Not found ..' });
    else res.json(prod);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRecordById = async (req, res) => {
  
  try {
    const prod = await Product.findById(req.params.id);
    if (!prod) res.status(404).json({ message: 'Not found' });
    else res.json(prod);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addNewRecord = async (req, res) => {
  const { name, client } = req.body;

  try {
    
    const newProduct = new Product({ name: name, client: client });
    await newProduct.save();
    res.json({ message: 'OK ' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.editRecord = async (req, res) => {
  const { name, client } = req.body;

  try {
    
    const prod = await Product.findById(req.params.id);
    if (prod) {
      await Product.updateOne(
        { _id: req.params.id },
        {$set: { name: name, client: client },}
      );
      res.json({ message: 'Ok' });
    } else res.status(404).json({ message: 'Not found ...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteRecord = async (req, res) => {

  try {
    const dep = await Product.findById(req.params.id);
    if (dep) {
      await Product.remove(dep);
      res.json({ message: 'Ok' });
    } else res.status(404).json({ message: 'Not found.. ' });
  } catch (err) {
    req.status(500).json({ message: err });
  }
};