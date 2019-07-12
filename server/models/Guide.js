const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  coverImg: { type: String },
  title: { type: String },
  desc: { type: String },
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
  body: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Guide', schema, 'Guides')