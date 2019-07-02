const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 实现关联时，知道从何处寻找数据
  body: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', schema)