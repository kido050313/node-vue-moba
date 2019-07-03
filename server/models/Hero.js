const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  title: { type: String },
  avatar: { type: String },
  banner: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }], // 分类多选
  scores: { // object类型
    difficult: {type: Number},
    skills: {type: Number},
    attack: {type: Number},
    survive: {type: Number}
  },
  skills: [{
    icon: {type: String},
    name: {type: String},
    description: {type: String},
    tips: {type: String}
  }],
  items1: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}], // 顺风装备
  items2: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}], // 逆风装备
  usageTips: {type: String},
  battleTips: {type: String},
  teamTips: {type: String},
  partners: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
    description: {type: String}
  }],
  enemies: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
    description: {type: String}
  }],
  countes: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
    description: {type: String}
  }]
})

module.exports = mongoose.model('Hero', schema, 'heroes')