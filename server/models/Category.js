const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } // 实现关联时，知道从何处寻找数据
})

// 子分类

// schema.virtual('children', {
//   localField: '_id',
//   foreignField: 'parent',
//   justOne: false,
//   ref: 'Category'
// })

// schema.virtual('newsList', {
//   localField: '_id',
//   foreignField: 'categories',
//   justOne: false,
//   ref: 'Article'
// })

module.exports = mongoose.model('Category', schema)