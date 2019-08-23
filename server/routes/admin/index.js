module.exports = app => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')

  const router = express.Router({
    mergeParams: true
  })

  // 登录校验中间件
  const authMiddlewear = require('../../middlewear/auth')
  // 资源中间件
  const resourceMiddlewear = require('../../middlewear/resource')

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
  router.get('/', authMiddlewear(), async (req, res) => {
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


  app.use('/admin/api/rest/:resource', authMiddlewear(), resourceMiddlewear(), router) // rest 通用接口前缀


  // 图片解析中间件
  const multer = require('multer')
  const upload = multer({dest: __dirname + '../../../uploads'})
  // 图片上传
  app.post('/admin/api/upload', authMiddlewear(), upload.single('file'), async(req, res) => {
    const file = req.file;
    file.url = `http://39.104.230.41/uploads/${file.filename}`
    res.send(file)
  })

  //登录接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body // 解构赋值

    // 1.根据用户名找用户
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user, 422, '用户不存在')

    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')

    // 3.返回token
    const token = jwt.sign({id: user._id}, app.get('secret')) // get只能查一个参数
    res.send({token})
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}