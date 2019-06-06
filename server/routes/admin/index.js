module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Category = require('../../models/Category')

  // 新建分类
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })

  // 更新
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 分类列表
  /* populate: 查找关联信息，获得对应的分类对象 */
  router.get('/categories', async (req, res) => {
    const items = await Category.find().populate('parent').limit(10)
    res.send(items)
  })

  // 编辑分类
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })

  // 删除分类
  router.delete('/categories/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })


  app.use('/admin/api', router)
}