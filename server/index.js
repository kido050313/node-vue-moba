const express = require("express")

const app = express()

app.set('secret', '23jashfuyejai28h2h3') // 第二个值应该放到一个环境变量中，而不应该放到代码中，此处仅为测试用

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

// 允许访问uploads文件夹
app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(3000, () => {
  console.log('http://localhost:3000');
});