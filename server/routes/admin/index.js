module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')

  const router = express.Router({
    mergeParams: true
  })


  // 新建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 更新
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 资源列表
  /* populate: 查找关联信息，获得对应的分类对象 */
  router.get('/', async (req, res, nex) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    const tokenData = jwt.verify(token, app.get('secret'))
  }, async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })

  // 编辑资源
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })


  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router) // rest 通用接口前缀


  // 图片解析中间件
  const multer = require('multer')
  const upload = multer({dest: __dirname + '../../../uploads'})
  // 图片上传
  app.post('/admin/api/upload', upload.single('file'), async(req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  //登录接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body // 解构赋值
    // 1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')
    const user = await AdminUser.findOne({username}).select('+password')
    if (!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }

    const isValid = require('bcrypt').compareSync(password, user.password)
    // 2.校验密码
    if(!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }

    // 3.返回token
    const token = jwt.sign({id: user._id}, app.get('secret')) // get只能查一个参数
    res.send({token})
  })
}