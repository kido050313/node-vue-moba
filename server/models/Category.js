const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } // 实现关联时，知道从何处寻找数据
})

module.exports = mongoose.model('Category', schema)