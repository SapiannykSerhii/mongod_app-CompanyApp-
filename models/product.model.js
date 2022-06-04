const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: String, reauired: true }
})

module.exports = mongoose.model('Product', productSchema)