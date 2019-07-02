/* 方便一次性录入大量数据进行测试
 * 生产环境不使用
*/
module.exports = app => {
  const router = require('express').Router();

  // 引入模型
  const mongoose = require('mongoose');
  const Article = mongoose.model('Article');
  const Category = mongoose.model('Category');
  // const Article = require('../../models/Article');

  router.get('/news/init', async (req, res) => {

    const parent = await Category.findOne({
      name: '新闻分类'
    })

    const cats = await Category.find().where({
      parent: parent
    }).lean() // lean()取纯粹的json

    const newsTitles = ["姐姐镜剪影曝光，曜往事大揭秘！", "新版本爆料⑥ | 美梦将成真~永久皮肤、回城特效免费得！", "新版本爆料⑤丨排位优化抢先看，对局环境体验UP！", "王者人生×王者荣耀 | 特权强势升级，来做王者峡谷最靓的仔！", "稷下星之队集结 快手官号回馈超值福利", "7月1日抢先服不停机更新公告", "6月29日全服不停机修复公告", "6月28日全服不停机修复公告", "【已开服】6月26日正式服“稷下星之队”版本更新公告", "【正式服】“稷下星之队”版本异常问题说明", "稷下精彩活动明日到来 任你徜徉王者峡谷", "稷下星之队集结 新版本超值福利回馈", "恭喜eStarPro捧起银龙杯 赛末冲刺惊喜礼不断", "王者大陆的端午宝藏活动公告", "峡谷庆端午 惊喜礼不断", "【6月15日 再战西安 · 2019年KPL春季赛总决赛重启公告】", "王者荣耀世界冠军杯荣耀来袭，KPL赛区选拔赛谁能突围而出？", "【关于2019年KPL春季赛总决赛门票退换及异地用户现场观赛补贴公告】", "世冠小组赛抽签结果公布，7月3日12点售票窗口开启！", "KCC选拔赛快讯：美韩劲旅战至巅峰对决，GOG斩获世冠最后一张门票"];
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5); // 随机排序
      return {
        categories: randomCats.slice(0,2),
        title: title
      }
    })

    // 清空数据库
    await Article.deleteMany({});
    // 录入数据
    await Article.insertMany(newsList);
    res.send(newsList);
  });

  router.get('/news/list', async (req, res) => {

    // 返回数据以分类为主体，关联新闻,但是无法满足每种分类必须返回5条数据
    // const parent = await Category.findOne({
    //   name: '新闻分类'
    // }).populate({
    //   path: 'children', // 调取新闻分类下的子分类
    //   populate: {
    //     path: 'newsList'
    //   }
    // }).lean();

    // 聚合查询

    const parent = await Category.findOne({
      name: '新闻分类'
    })

    const cats = await Category.aggregate([

      // 执行一个match操作。即条件查询

      { $match: { parent: parent._id } },

      // 关联查询

      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields: {
          newsList: { $slice: ['$newsList', 5] }
        }
      }
    ]);

    const subCats = cats.map(v => v._id);
    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: { $in: subCats }
      }).populate('categories').limit(5).lean()
    });

    // 每条信息的前缀处理
    cats.map(cat => {
      cat.newsList.map( news => {
        news.categoryName = (cat.name === '热门')
        ? news.categories[0].name : cate.name;
        return news;
      })
    })
    res.send(cats);
  })

  app.use('/web/api', router)
}