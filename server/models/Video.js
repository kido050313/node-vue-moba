const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 实现关联时，知道从何处寻找数据
  coverImg: { type: String },
  playNumber: { type: Number }
}, {
  timestamps: true
})

module.exports = mongoose.model('Video', schema, 'videos')