(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],d=0,p=[];d<c.length;d++)r=c[d],i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"addab9d2"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=i[t]=[e,a]});e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t),n=function(e){l.onerror=l.onload=null,clearTimeout(o);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");r.type=a,r.request=n,s[1](r)}i[t]=void 0}};var o=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/web/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1399:function(t,e,s){"use strict";var a=s("2e99"),i=s.n(a);i.a},"21bb":function(t,e,s){"use strict";var a=s("bcc9"),i=s.n(a);i.a},"2ba4":function(t,e,s){"use strict";var a=s("7f24"),i=s.n(a);i.a},"2e99":function(t,e,s){},"41a3":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,d=(s("be35"),s("f27b"),s("8c4f")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse jc-around pb-1"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"}},[t._v("赛事中心")])],1)])]),s("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("9d64"),height:"30"}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-gray-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],v={},f=v,m=(s("2ba4"),Object(r["a"])(f,u,p,!1,null,"57a6ffdf",null)),g=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("6b20"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("7d70"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("6720"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-home px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons text-center bg-white mt-3 pt-3 text-gray"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapse,expression:"!collapse"}],staticClass:"d-flex flex-wrap"},t._l(t.icons,function(e,s){return a("div",{key:s,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite",class:"sprite-"+e.icon}),a("span",{staticClass:"display-block py-1"},[t._v(t._s(e.text))])])}),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.collapse,expression:"collapse"}],staticClass:"d-flex flex-wrap"},t._l(t.icons.slice(0,4),function(e,s){return a("div",{key:s,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite",class:"sprite-"+e.icon}),a("span",{staticClass:"display-block py-1"},[t._v(t._s(e.text))])])}),0),a("div",{staticClass:"bg-light py-2 fs-sm",on:{click:function(e){t.collapse=!t.collapse}}},[a("i",{staticClass:"sprite sprite-arrow",class:{rotate:!0===t.collapse}}),a("span",{staticClass:"ml-1 text-dark-l"},[t._v(t._s(t.collapseStatus))])])]),a("list-card",{attrs:{icon:"menu",title:"新闻资讯",categories:t.newCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark-1 text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-gray-1 fs-sm"},[t._v(t._s(t._f("date")(e.createdAt)))])])})}}])}),a("list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"hero-slide d-flex flex-wrap"},t._l(s.heroList,function(e,s){return a("router-link",{key:"hero-"+s,staticClass:"hero-list p-2 text-center",attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar}}),a("span",{staticClass:"display-block"},[t._v(t._s(e.name))])])}),1)]}}])}),a("div",[a("list-card",{attrs:{plain:"",icon:"Play",title:"精彩视频",categories:t.videoCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"video-slide d-flex flex-wrap"},t._l(s.videoList,function(e,s){return a("router-link",{key:"video-"+s,staticClass:"video-list mb-3",attrs:{tag:"div",to:"/videos/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.coverImg}}),a("span",{staticClass:"video-title mt-2 text-dark text-line-clamp"},[t._v(t._s(e.name))]),a("div",{staticClass:"d-flex jc-between text-gray-2 fs-sm ai-center mt-1"},[a("div",{staticClass:"d-flex"},[a("i",{staticClass:"iconfont icon-video pr-1"}),a("span",[t._v(t._s(t.numDetail(e.playNumber)))])]),a("span",[t._v(t._s(t._f("date1")(e.createdAt)))])])])}),1)]}}])}),a("div",{staticClass:"video-bottom bg-white text-center text-gray-2 fs-sm"},[t._v("点击查看更多")])],1)],1)},_=[],C=(s("c5f6"),s("96cf"),s("3b8d")),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{icon:t.icon,title:t.title}},[s("div",{staticClass:"nav jc-between pt-2"},t._l(t.categories,function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.listSwiper.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])}),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"listSwiper",attrs:{options:{autoHeight:!0,loop:!0,observer:!0,observeParents:!0}},on:{"slide-change":function(){return t.active=t.$refs.listSwiper.swiper.realIndex}}},t._l(t.categories,function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)}),1)],1)])},b=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-3"},[s("div",{staticClass:"card-header d-flex ai-center",class:{"border-bottom":!t.plain,"pb-3":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-xl flex-1 px-2"},[t._v(t._s(t.title))]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu1 fs-xxl"})]),s("div",{staticClass:"card-body pt-2"},[t._t("default")],2)])},w=[],k={name:"Card",props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},j=k,S=(s("9891"),Object(r["a"])(j,y,w,!1,null,"48134f6a",null)),O=S.exports,$={name:"listCard",props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}},components:{"m-card":O}},E=$,P=Object(r["a"])(E,x,b,!1,null,null,null),R=P.exports,T=s("5a0c"),I=s.n(T),A={filters:{date:function(t){return I()(t).format("MM/DD")},date1:function(t){return I()(t).format("MM-DD")}},name:"home",data:function(){return{swiperOption:{loop:!0,observer:!0,observeParents:!0,autoplay:!0,pagination:{el:".pagination-home"}},icons:[{text:"爆料站",icon:"news"},{text:"故事站",icon:"story"},{text:"周边商城",icon:"shop"},{text:"体验服",icon:"experience"},{text:"新人专区",icon:"newcomer"},{text:"荣耀·传承",icon:"glory"},{text:"同人社区",icon:"community"},{text:"王者营地",icon:"camp"},{text:"公众号",icon:"no-public"}],newCats:[],heroCats:[],videoCats:[],collapse:!1}},computed:{collapseStatus:function(){return!1===this.collapse?"收起":"展开"}},methods:{fetchNewsCats:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("news/list");case 2:e=t.sent,this.newCats=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchHeroCats:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/list");case 2:e=t.sent,this.heroCats=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchVideoCats:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("videos/list");case 2:e=t.sent,this.videoCats=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),numDetail:function(t){var e=new Number(t);if(e<1e4)return e;if(e>1e4){var s=parseFloat(parseInt(e)/1e4).toFixed(1);return s+"万"}if(e>1e8){var a=parseFloat(parseInt(e)/1e4).toFixed(1);return a+"亿"}}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideoCats()},components:{listCard:R}},M=A,N=(s("21bb"),Object(r["a"])(M,h,_,!1,null,null,null)),q=N.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-1 bor"},[s("i",{staticClass:"iconfont icon-Back text-blue"}),s("strong",{staticClass:"flex-1 text-blue pl-2 text-ellipsis"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-gray fs-xs ml-4"},[t._v("2019-06-19")])]),s("div",{staticClass:"body px-3 fs-lg",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"px-3 border-top py-3"},[t._m(0),s("div",{staticClass:"pt-2"},t._l(t.model.related,function(e,a){return s("router-link",{key:a,staticClass:"py-1 text-ellipsis",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v("\n      "+t._s(e.title)+"\n      ")])}),1)])]):t._e()},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex ai-center"},[s("i",{staticClass:"iconfont icon-menu"}),s("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])}],H={name:"Article",props:{id:{required:!0}},data:function(){return{model:null}},watch:{id:"fetch"},methods:{fetch:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("articles/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()}},F=H,U=(s("1399"),Object(r["a"])(F,L,D,!1,null,null,null)),V=U.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center text-white"},[a("img",{attrs:{src:s("9d64"),height:"30"}}),t._m(0),a("router-link",{attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map(function(t){return t.name}).join("/")))]),a("div",{staticClass:"d-flex jc-between pt-2 fs-lg"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-gray",attrs:{to:"/",tag:"div"}},[t._v("皮肤： 2 >")])],1)])]),a("div",[a("div",{staticClass:"bg-white px-3"},[a("div",{staticClass:"nav jc-around pt-3 py-2 border-bottom"},[a("div",{staticClass:"nav-item",class:{active:0===t.active},on:{click:function(e){return t.$refs.listSwiper.swiper.slideTo(0)}}},[a("div",{staticClass:"nav-link"},[t._v("英雄初识")])]),a("div",{staticClass:"nav-item",class:{active:1===t.active},on:{click:function(e){return t.$refs.listSwiper.swiper.slideTo(1)}}},[a("div",{staticClass:"nav-link"},[t._v("进阶攻略")])])])]),a("swiper",{ref:"listSwiper",on:{"slide-change":function(){return t.active=t.$refs.listSwiper.swiper.realIndex}}},[a("swiper-slide",[a("div",[a("div",{staticClass:"bg-white p-3 border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{to:"/",tag:"button"}},[a("i",{staticClass:"iconfont icon-Play text-primary"}),a("span",[t._v("英雄介绍视频")])]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{to:"/",tag:"button"}},[a("i",{staticClass:"iconfont icon-image text-primary"}),a("span",[t._v("一图识英雄")])])],1),a("div",{staticClass:"skills mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,function(e,s){return a("img",{key:s,staticClass:"icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon},on:{click:function(e){t.currentSkillIndex=s}}})}),0),a("div",[a("div",{staticClass:"d-flex ai-center"},[a("h3",{staticClass:"text-dark-light fs-lmg"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"ml-5 fs-sm text-gray-2"},[t._v("\n                    (\n                    冷却值："+t._s(t.currentSkill.delay)+"\n                    消耗："+t._s(t.currentSkill.cost)+"\n                    )\n                  ")])]),a("p",{staticClass:"text-dark-light"},[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-gray-2"},[t._v("小提示："+t._s(t.currentSkill.tips))])])])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"jianyi",title:"出装推荐"}},[a("div",{staticClass:"text-dark-light fs-lmg py-2"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around pt-1 text-center"},t._l(t.model.items1,function(e,s){return a("div",{key:s,staticClass:"d-flex flex-column"},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("span",{staticClass:"fs-xs mt-2"},[t._v(t._s(e.name.slice(0,4)))])])}),0),a("div",{staticClass:"border-bottom mt-4"}),a("div",{staticClass:"text-dark-light fs-lmg mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around mt-3 text-center"},t._l(t.model.items2,function(e,s){return a("div",{key:s,staticClass:"d-flex flex-column"},[a("img",{staticClass:"icon",attrs:{src:e.icon}}),a("span",{staticClass:"fs-xs mt-2"},[t._v(t._s(e.name.slice(0,4)))])])}),0)]),a("m-card",{attrs:{plain:"",icon:"gonglve",title:"使用技巧"}},[a("p",{staticClass:"m-0 text-dark-light"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"gonglve",title:"对抗技巧"}},[a("p",{staticClass:"m-0 text-dark-light"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"gonglve",title:"团战思路"}},[a("p",{staticClass:"m-0 text-dark-light"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"gonglve",title:"英雄关系"}},[a("div",{staticClass:"fs-lmg mt-2"},[t._v("最佳搭档")]),t._l(t.model.partners,function(e,s){return a("div",{key:s,staticClass:"d-flex pt-3"},[a("img",{attrs:{height:"48",src:e.hero.avatar}}),a("p",{staticClass:"flex-1 m-0 ml-3 text-dark-light"},[t._v(t._s(e.description))])])}),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-lmg mt-2"},[t._v("被谁克制")]),t._l(t.model.enemies,function(e,s){return a("div",{key:"enemies-"+s,staticClass:"d-flex pt-3"},[a("img",{attrs:{height:"48",src:e.hero.avatar}}),a("p",{staticClass:"flex-1 m-0 ml-3 text-dark-light"},[t._v(t._s(e.description))])])}),a("div",{staticClass:"border-bottom mt-3"}),a("div",{staticClass:"fs-lmg mt-2"},[t._v("克制谁")]),t._l(t.model.countes,function(e,s){return a("div",{key:"item-"+s,staticClass:"d-flex pt-3"},[a("img",{attrs:{height:"48",src:e.hero.avatar}}),a("p",{staticClass:"flex-1 m-0 ml-3 text-dark-light"},[t._v(t._s(e.description))])])})],2)],1)]),a("swiper-slide",[a("div",[t._v("222")])])],1)],1)]):t._e()},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 flex-1"},[s("span",[t._v("王者荣耀")]),s("span",{staticClass:"ml-3"},[t._v("攻略战")])])}],z={name:"Hero",props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0,active:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("heroes/".concat(this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetch()},components:{"m-card":O}},G=z,K=(s("cb32"),Object(r["a"])(G,B,J,!1,null,"3bd10568",null)),Q=K.exports;a["a"].use(d["a"]);var W=new d["a"]({routes:[{path:"/",name:"main",component:g,children:[{path:"/",name:"home",component:q},{path:"/articles/:id",name:"Article",component:V,props:!0}]},{path:"/heroes/:id",name:"hero",component:Q,props:!0},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),X=s("7212"),Y=s.n(X),Z=(s("dfa4"),s("bc3a")),tt=s.n(Z);a["a"].use(Y.a),a["a"].prototype.$http=tt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/web/"}).VUE_APP_API_URL||"/web/api"}),a["a"].config.productionTip=!1,new a["a"]({router:W,render:function(t){return t(o)}}).$mount("#app")},6720:function(t,e,s){t.exports=s.p+"img/392e511db4e864fd3e6d8a7aa3ecf475.392e511d.png"},"6b20":function(t,e,s){t.exports=s.p+"img/e79fcfe4c1cf569573ff75995aead39a.e79fcfe4.jpeg"},"7d70":function(t,e,s){t.exports=s.p+"img/25582bda768733833c0e23468dd31cbe.25582bda.jpeg"},"7f24":function(t,e,s){},8522:function(t,e,s){},9891:function(t,e,s){"use strict";var a=s("41a3"),i=s.n(a);i.a},"9d64":function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"},bcc9:function(t,e,s){},be35:function(t,e,s){},cb32:function(t,e,s){"use strict";var a=s("8522"),i=s.n(a);i.a},f27b:function(t,e,s){}});
//# sourceMappingURL=app.54d9cd5c.js.map