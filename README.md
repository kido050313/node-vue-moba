# node-vue-moba
王者荣耀移动端后台接口练手项目

server: 后台服务端
web: 移动端官网
admin: 后台

## 三、移动端网站
1. 样式重置、颜色、字体变量值、scss插件安装
2. 网站色彩和字体定义
3. 通用flex布局样式定义（scss,@each使用）
4. 常用边距定义（margin,padding @each嵌套使用）
5. 首页顶部下载部分以及导航栏制作，transparent的作用
6. 首页banner制作（vue-awesome-swiper）, scoped影响分页器样式不起效果，！important + 局部样式限定解决
7. 首页顶部轮播图
8. sprite 雪碧图 ，借助http://www.spritecow.com/网站可快速找到position
9. 字体图标（iconfont的下载使用）
10. 新闻资讯卡片组件(Card.vue， slot的使用)
11. 列表卡片组件(具名插槽的使用和传值[https://cn.vuejs.org/v2/guide/components-slots.html#具名插槽的缩写])
12. 测试环境利用mongoose快速录入测试数据，（lean(),deleteMany() insertMany(), 随机排序，引入model等）
13. 首页新闻资讯，mongoose聚合函数（aggregate）查询数据，将数据处理成前端需要的格式。
14. 首页新闻资讯对接接口，界面展示（axios,dayjs插件）
15. 录入英雄数据
16. 首页英雄列表对接接口，界面展示（swiper: autoHeight）
17. 文章详情页界面
18. 英雄详情数据接口web/index.js, Hero.vue获取数据
19. 英雄详情页后台编辑（21:07）
20. 英雄详情页与其他英雄关系编辑
21. 英雄详情页界面展示，顺风出装部分（优化card组件，关联优化web.index.js英雄详情数据，完善后台英雄编辑页面，添加公共颜色，字体，样式）