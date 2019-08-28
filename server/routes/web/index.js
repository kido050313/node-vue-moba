/* 方便一次性录入大量数据进行测试
 * 生产环境不使用
*/
module.exports = app => {
  const router = require('express').Router();

  // 引入模型
  const mongoose = require('mongoose');
  const Article = mongoose.model('Article');
  const Category = mongoose.model('Category');
  const Hero = mongoose.model('Hero');
  const Guide = mongoose.model('Guide');
  const Ad = mongoose.model('Ad'); 
  // const Article = require('../../models/Article');


  // 首页banner广告位
  router.get('/ads/list', async(req, res) => {
    const data = await Ad.find();

    res.send(data);
  })

  // 导入新闻数据
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean() // lean()取纯粹的json

    const newsTitles = ["姐姐镜剪影曝光，曜往事大揭秘！", "新版本爆料⑥ | 美梦将成真~永久皮肤、回城特效免费得！", "新版本爆料⑤丨排位优化抢先看，对局环境体验UP！", "王者人生×王者荣耀 | 特权强势升级，来做王者峡谷最靓的仔！", "稷下星之队集结 快手官号回馈超值福利", "7月1日抢先服不停机更新公告", "6月29日全服不停机修复公告", "6月28日全服不停机修复公告", "【已开服】6月26日正式服“稷下星之队”版本更新公告", "【正式服】“稷下星之队”版本异常问题说明", "稷下精彩活动明日到来 任你徜徉王者峡谷", "稷下星之队集结 新版本超值福利回馈", "恭喜eStarPro捧起银龙杯 赛末冲刺惊喜礼不断", "王者大陆的端午宝藏活动公告", "峡谷庆端午 惊喜礼不断", "【6月15日 再战西安 · 2019年KPL春季赛总决赛重启公告】", "王者荣耀世界冠军杯荣耀来袭，KPL赛区选拔赛谁能突围而出？", "【关于2019年KPL春季赛总决赛门票退换及异地用户现场观赛补贴公告】", "世冠小组赛抽签结果公布，7月3日12点售票窗口开启！", "KCC选拔赛快讯：美韩劲旅战至巅峰对决，GOG斩获世冠最后一张门票"];
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5); // 随机排序
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })

    // 清空数据库
    await Article.deleteMany({});

    // 录入数据
    await Article.insertMany(newsList);
    res.send(newsList);
  });

  // 新闻列表接口
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
      cat.newsList.map(news => {
        news.categoryName = (cat.name === '热门')
          ? news.categories[0].name : cat.name;
        return news;
      })
    })
    res.send(cats);
  });

  // 导入英雄数据,测试接口
  router.get('/heroes/init', async (req, res) => {

    // 清空数据库数据
    await Hero.deleteMany({});

    const rawData = [{ "name": "热门", "heroes": [{ "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "狄仁杰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }] }, { "name": "战士", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "曹操", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "宫本武藏", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "老夫子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" }, { "name": "关羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "刘备", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" }, { "name": "杨戬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" }, { "name": "雅典娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" }, { "name": "哪吒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "狂铁", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" }, { "name": "李信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "盘古", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" }, { "name": "曜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg" }] }, { "name": "法师", "heroes": [{ "name": "小乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "嬴政", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" }, { "name": "高渐离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" }, { "name": "扁鹊", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "周瑜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "武则天", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "姜子牙", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "王昭君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" }, { "name": "张良", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "诸葛亮", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" }, { "name": "干将莫邪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" }, { "name": "女娲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" }, { "name": "杨玉环", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "弈星", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" }, { "name": "米莱狄", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" }, { "name": "沈梦溪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }] }, { "name": "坦克", "heroes": [{ "name": "廉颇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "白起", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "项羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "刘邦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "猪八戒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" }] }, { "name": "刺客", "heroes": [{ "name": "阿轲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" }, { "name": "李白", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "兰陵王", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" }, { "name": "娜可露露", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "百里玄策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "元歌", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }] }, { "name": "射手", "heroes": [{ "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "马可波罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" }, { "name": "狄仁杰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "李元芳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" }, { "name": "虞姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" }, { "name": "成吉思汗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" }, { "name": "黄忠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "公孙离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" }, { "name": "伽罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }] }, { "name": "辅助", "heroes": [{ "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "蔡文姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "大乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" }, { "name": "鬼谷子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" }, { "name": "明世隐", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }] }]
    for (let cat of rawData) {
      if (cat.name === '热门') {
        continue;
      }

      // 查找当前分类在数据库中对应的数据
      const category = await Category.findOne({
        name: cat.name
      })
      cat.heroes = cat.heroes.map(hero => {
        hero.categories = [category]
        return hero;
      })

      // 录入英雄
      await Hero.insertMany(cat.heroes)
    }

    res.send(await Hero.find())
  });

  // 英雄列表接口
  router.get('/heroes/list', async (req, res) => {

    // 聚合查询
    const parent = await Category.findOne({
      name: '英雄分类'
    })

    const cats = await Category.aggregate([

      // 执行一个match操作。即条件查询
      { $match: { parent: parent._id } },

      // 关联查询
      {
        $lookup: {
          from: 'heroes',
          localField: '_id',
          foreignField: 'categories',
          as: 'heroList'
        }
      }
    ]);

    const subCats = cats.map(v => v._id);
    cats.unshift({
      name: '热门',
      heroList: await Hero.find().where({
        categories: { $in: subCats }
      }).limit(10).lean()
    });

    res.send(cats);
  });

  // 视频列表数据
  router.get('/videos/list', async (req, res) => {
    const parent = await Category.findOne({
      name: '精彩视频'
    })

    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'videos',
          localField: '_id',
          foreignField: 'categories',
          as: 'videoList'
        }
      }
    ]);
    res.send(cats);
  })

  // 导入攻略数据
  router.get('/guides/init', async (req, res) => {

    // 清空数据库数据
    await Guide.deleteMany({});

    const _rowData = [{"name":"最新","guides":[{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190707/a9667d1d5a8ff6db43b6a330474c5f0d.1562471897.9f95a51afcc7288e1746ada388adbfda.184x124_18123.jpg","title":"这才叫最强团控 美艳冻人的甄姬技能分析铭文出装打法攻略","desc":"这才叫最强团控 美艳冻人的甄姬技能分析铭文出装打法攻略"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190709/a301a66f3a5923d5ee762e1691760265.1562642909.eebcc27f0e7839df17ad5659ffaba2dd.184x124_18413.jpg","title":"s16中单一姐|最受欢迎的法师，不是武则天，也不是上官婉儿","desc":"s16中单一姐|最受欢迎的法师，不是武则天，也不是上官婉儿"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190708/bc4ccaa04c0b48ce6cb6d45c9056bc78.1562589955.15f33934c93e0247bc455d50179d731b.184x124_11488.JPG","title":"s16新赛季各位置T1级别英雄推荐","desc":"s16新赛季各位置T1级别英雄推荐"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/6f4922f45568161a8cdf4ad2299f6d23.1562827848.3c4404243830862a65f6cc9d4c54c191.184x124_55372.jpg","title":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析","desc":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/6f4922f45568161a8cdf4ad2299f6d23.1562827848.3c4404243830862a65f6cc9d4c54c191.184x124_55372.jpg","title":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析","desc":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/5865ebc3801bfda891014100bf123fab.1562762614.aec80543360176b8e0c102928b9a0748.184x124_13622.jpg","title":"S16项羽彻底崛起，已成优秀坦克边路，这些技巧值得学习","desc":"S16项羽彻底崛起，已成优秀坦克边路，这些技巧值得学习"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/096e276c613feb1bfd9300a74e6567c9.1562740590.94d3ff56ff47b6e197de2d641e014c67.230x140_8648.jpg","title":"体验服最新英雄调整|孙膑罕见调整，玄策再次降温，此人T0很稳","desc":"体验服最新英雄调整|孙膑罕见调整，玄策再次降温，此人T0很稳"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/c81e728d9d4c2f636f067f89cc14862c.1562738197.e23a47cadc8cde65e7bd24ab484b8d9c.230x140_54916.jpg","title":"S16冷门英雄项羽（一个被忽略的强势英雄）","desc":"S16冷门英雄项羽（一个被忽略的强势英雄）"},{"coverImg":"https://shp.qpic.cn/cfwebcap/0/1885c4223aeba93baf924a41c7576865/0/?width=230&height=140","title":"从Nova小局战胜EDG.M，论境外赛区对战KPL战队的获胜可能性","desc":"7月11日王者荣耀世界冠军杯第二日，本日的比赛精彩纷呈，尤其是作为KRKPL冠军的Nova战队成功从KPL强队EDG.M手中夺得境外赛区与KPL赛区战队的第一个小分，更是创造了王者荣耀比赛的历史。"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/cfcd208495d565ef66e7dff9f98764da.1562726061.5fd37ae36bcc7b58889298ff1f09a5c6.184x124_58473.png","title":"新赛季最佳上分战士：达摩T3，钟无艳T2，T0的他是尊大神","desc":"新赛季最佳上分战士：达摩T3，钟无艳T2，T0的他是尊大神"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190707/9d43227a3e90c1106043f532463e3f5e.1562475347.fa47f0e5f99b6cac442025db39eead47.184x124_59467.png","title":"S16上分阵容推荐，上路吕布，中路王昭君，射手选她高爆发","desc":"S16上分阵容推荐，上路吕布，中路王昭君，射手选她高爆发"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/8966d481a1aa5672574fc37e07d3368b.1562728480.42a8df3b0146d0d5b51a1f7dae61aebc.230x140_11960.jpg","title":"s16坦克英雄项羽上分教学","desc":"s16坦克英雄项羽上分教学"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/96ee39e86e4efcb79f0a5fed5f17b02b.1562811864.ecf90e1dd63bc6a3c62bb3a2e00edc45.184x124_11959.jpg","title":"王者荣耀：全能英雄嫦娥的全方面分析教学","desc":"王者荣耀：全能英雄嫦娥的全方面分析教学"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190709/c4ca4238a0b923820dcc509a6f75849b.1562669709.5bf266db945e5035c8b9f54f7bf0454b.184x124_61892.png","title":"S16超稳上分射手推荐：李元芳T3，鲁班T2，T0是尊大神","desc":"S16超稳上分射手推荐：李元芳T3，鲁班T2，T0是尊大神"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190708/728471ece416708a6b950861dfc96b86.1562589498.a50df745b0416ec3e7bbadfef1b1731d.184x124_17832.jpg","title":"S16坦克上分TOP5推荐|项羽第五，张飞第四，前三是他们","desc":"S16坦克上分TOP5推荐|项羽第五，张飞第四，前三是他们"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/4788d77890302360ea8318eca054b8cb.1562812868.c50d2e1398cae382e5786196f4dac223.184x124_35230.jpg","title":"妲己新套路教学：双鞋子流出装性价比超高，这种快节奏版本很适合","desc":"妲己新套路教学：双鞋子流出装性价比超高，这种快节奏版本很适合"}]},{"name":"英雄","guides":[{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190707/a9667d1d5a8ff6db43b6a330474c5f0d.1562471897.9f95a51afcc7288e1746ada388adbfda.184x124_18123.jpg","title":"这才叫最强团控 美艳冻人的甄姬技能分析铭文出装打法攻略","desc":"这才叫最强团控 美艳冻人的甄姬技能分析铭文出装打法攻略"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190709/a301a66f3a5923d5ee762e1691760265.1562642909.eebcc27f0e7839df17ad5659ffaba2dd.184x124_18413.jpg","title":"s16中单一姐|最受欢迎的法师，不是武则天，也不是上官婉儿","desc":"s16中单一姐|最受欢迎的法师，不是武则天，也不是上官婉儿"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190708/bc4ccaa04c0b48ce6cb6d45c9056bc78.1562589955.15f33934c93e0247bc455d50179d731b.184x124_11488.JPG","title":"s16新赛季各位置T1级别英雄推荐","desc":"s16新赛季各位置T1级别英雄推荐"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/6f4922f45568161a8cdf4ad2299f6d23.1562827848.3c4404243830862a65f6cc9d4c54c191.184x124_55372.jpg","title":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析","desc":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/6f4922f45568161a8cdf4ad2299f6d23.1562827848.3c4404243830862a65f6cc9d4c54c191.184x124_55372.jpg","title":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析","desc":"S16边路上分首选英雄丨前期必拿一血，自爆一路橘右京打法解析"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/5865ebc3801bfda891014100bf123fab.1562762614.aec80543360176b8e0c102928b9a0748.184x124_13622.jpg","title":"S16项羽彻底崛起，已成优秀坦克边路，这些技巧值得学习","desc":"S16项羽彻底崛起，已成优秀坦克边路，这些技巧值得学习"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/096e276c613feb1bfd9300a74e6567c9.1562740590.94d3ff56ff47b6e197de2d641e014c67.230x140_8648.jpg","title":"体验服最新英雄调整|孙膑罕见调整，玄策再次降温，此人T0很稳","desc":"体验服最新英雄调整|孙膑罕见调整，玄策再次降温，此人T0很稳"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/c81e728d9d4c2f636f067f89cc14862c.1562738197.e23a47cadc8cde65e7bd24ab484b8d9c.230x140_54916.jpg","title":"S16冷门英雄项羽（一个被忽略的强势英雄）","desc":"S16冷门英雄项羽（一个被忽略的强势英雄）"},{"coverImg":"https://shp.qpic.cn/cfwebcap/0/1885c4223aeba93baf924a41c7576865/0/?width=230&height=140","title":"从Nova小局战胜EDG.M，论境外赛区对战KPL战队的获胜可能性","desc":"7月11日王者荣耀世界冠军杯第二日，本日的比赛精彩纷呈，尤其是作为KRKPL冠军的Nova战队成功从KPL强队EDG.M手中夺得境外赛区与KPL赛区战队的第一个小分，更是创造了王者荣耀比赛的历史。"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/cfcd208495d565ef66e7dff9f98764da.1562726061.5fd37ae36bcc7b58889298ff1f09a5c6.184x124_58473.png","title":"新赛季最佳上分战士：达摩T3，钟无艳T2，T0的他是尊大神","desc":"新赛季最佳上分战士：达摩T3，钟无艳T2，T0的他是尊大神"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190707/9d43227a3e90c1106043f532463e3f5e.1562475347.fa47f0e5f99b6cac442025db39eead47.184x124_59467.png","title":"S16上分阵容推荐，上路吕布，中路王昭君，射手选她高爆发","desc":"S16上分阵容推荐，上路吕布，中路王昭君，射手选她高爆发"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190710/8966d481a1aa5672574fc37e07d3368b.1562728480.42a8df3b0146d0d5b51a1f7dae61aebc.230x140_11960.jpg","title":"s16坦克英雄项羽上分教学","desc":"s16坦克英雄项羽上分教学"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/96ee39e86e4efcb79f0a5fed5f17b02b.1562811864.ecf90e1dd63bc6a3c62bb3a2e00edc45.184x124_11959.jpg","title":"王者荣耀：全能英雄嫦娥的全方面分析教学","desc":"王者荣耀：全能英雄嫦娥的全方面分析教学"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190709/c4ca4238a0b923820dcc509a6f75849b.1562669709.5bf266db945e5035c8b9f54f7bf0454b.184x124_61892.png","title":"S16超稳上分射手推荐：李元芳T3，鲁班T2，T0是尊大神","desc":"S16超稳上分射手推荐：李元芳T3，鲁班T2，T0是尊大神"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190708/728471ece416708a6b950861dfc96b86.1562589498.a50df745b0416ec3e7bbadfef1b1731d.184x124_17832.jpg","title":"S16坦克上分TOP5推荐|项羽第五，张飞第四，前三是他们","desc":"S16坦克上分TOP5推荐|项羽第五，张飞第四，前三是他们"},{"coverImg":"https://itea-cdn.qq.com/file/tgl/20190711/4788d77890302360ea8318eca054b8cb.1562812868.c50d2e1398cae382e5786196f4dac223.184x124_35230.jpg","title":"妲己新套路教学：双鞋子流出装性价比超高，这种快节奏版本很适合","desc":"妲己新套路教学：双鞋子流出装性价比超高，这种快节奏版本很适合"}]},{"name":"新手","guides":[]},{"name":"官方","guides":[]},{"name":"同人","guides":[]}]
    for (let cat of _rowData) {
      if (cat.name === '最新') {
        continue;
      }

      // 查找当前分类在数据库中对应的数据
      const category = await Category.findOne({
        name: cat.name
      })

      cat.guides = cat.guides.map(guide => {
        guide.categories = [category];
        return guide;
      })

      // 录入数据
      await Guide.insertMany(cat.guides)
    }

    res.send(await Guide.find())
  })

  // 文章详情
  router.get('/articles/:id', async(req, res) => {
    const data = await Article.findById(req.params.id).lean();
    data.related = await Article.find().where({
      categories: {$in: data.categories}
    }).limit(2)
    res.send(data)
  });

  // 英雄详情
  router.get('/heroes/:id', async(req, res) => {
    const data = await Hero
    .findById(req.params.id)
    .populate('categories items1 items2 partners.hero enemies.hero countes.hero')
    .lean();
    res.send(data)
  })

  app.use('/web/api', router)
}