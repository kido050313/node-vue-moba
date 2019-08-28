<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in newAds.items" :key="index">
        <a :href="item.url">
          <img class="w-100" :src="item.image" alt />
        </a>
      </swiper-slide>
      <div class="swiper-pagination pagination-home px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons text-center bg-white mt-3 pt-3 text-gray">
      <div class="d-flex flex-wrap" v-show="!collapse">
        <div class="nav-item mb-3" v-for="(item, index) in icons" :key="index">
          <a :href="item.url">
            <i class="sprite" :class="`sprite-${item.icon}`"></i>
            <span class="display-block py-1">{{item.text}}</span>
          </a>
        </div>
      </div>
      <div class="d-flex flex-wrap" v-show="collapse">
        <div class="nav-item mb-3" v-for="(item, index) in icons.slice(0, 4)" :key="index">
          <i class="sprite" :class="`sprite-${item.icon}`"></i>
          <span class="display-block py-1">{{item.text}}</span>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm" @click="collapse = !collapse">
        <i class="sprite sprite-arrow" :class="{rotate: collapse === true}"></i>
        <span class="ml-1 text-dark-l">{{collapseStatus}}</span>
      </div>
    </div>
    <!-- end of navs -->

    <list-card icon="menu" title="新闻资讯" :categories="newCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-gray-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </list-card>

    <list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="hero-slide d-flex flex-wrap">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="hero-list p-2 text-center"
            v-for="(hero, index) in category.heroList"
            :key="'hero-'+index"
          >
            <img class="w-100" :src="hero.avatar" />
            <span class="display-block">{{hero.name}}</span>
          </router-link>
        </div>
      </template>
    </list-card>

    <div>
      <list-card plain icon="Play" title="精彩视频" :categories="videoCats">
        <template #items="{category}">
          <div class="video-slide d-flex flex-wrap">
            <router-link
              tag="div"
              class="video-list mb-3"
              :to="`/videos/${video._id}`"
              v-for="(video, index) in category.videoList"
              :key="'video-'+ index"
            >
              <img class="w-100" :src="video.coverImg" />
              <span class="video-title mt-2 text-dark text-line-clamp">{{video.name}}</span>
              <div class="d-flex jc-between text-gray-2 fs-sm ai-center mt-1">
                <div class="d-flex">
                  <i class="iconfont icon-video pr-1"></i>
                  <span>{{numDetail(video.playNumber)}}</span>
                </div>
                <span>{{video.createdAt | date1}}</span>
              </div>
            </router-link>
          </div>
        </template>
      </list-card>
      <div class="video-bottom bg-white text-center text-gray-2 fs-sm">加载更多内容</div>
    </div>

  </div>
</template>

<script>
import listCard from "../components/listCard.vue";
import dayjs from "dayjs"; // 格式化时间插件
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
    date1(val) {
      return dayjs(val).format("MM-DD");
    }
  },
  name: "home",
  data() {
    return {
      swiperOption: {
        loop:true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,
        autoplay: true,
        pagination: {
          el: ".pagination-home"
        }
      },
      icons: [
        { text: "爆料站", icon: "news", url: 'https://pvp.qq.com/m/m201706/coming/index.htm' },
        { text: "故事站", icon: "story", url: 'https://pvp.qq.com/story201904/index.html#/index'},
        { text: "周边商城", icon: "shop", url: 'http://pvp.qq.com/mall/m/' },
        { text: "体验服", icon: "experience", url: 'https://pvp.qq.com/cp/a20161116tyf/page01.htm' },
        { text: "新人专区", icon: "newcomer", url: 'https://pvp.qq.com/m/m201606/goCenter.shtml' },
        { text: "荣耀·传承", icon: "glory", url: 'https://pvp.qq.com/cp/a20181130culture/index.html' },
        { text: "同人社区", icon: "community", url: 'https://pvp.qq.com/m/fans/#/' },
        { text: "王者营地", icon: "camp" },
        { text: "公众号", icon: "no-public" }
      ],
      newAds: [],
      newCats: [],
      heroCats: [],
      videoCats: [],
      collapse: false // 收起展开
    };
  },
  computed: {
    collapseStatus() {
      if (this.collapse === false) {
        return "收起";
      } else {
        return "展开";
      }
    }
  },
  methods: {
    async fetchAds() {
      const res = await this.$http.get("ads/list");
      this.newAds = res.data[0];
    },
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      
      this.heroCats = res.data;
    },
    async fetchVideoCats() {
      const res = await this.$http.get("videos/list");
      this.videoCats = res.data;
    },
    numDetail(val) {
      let _num = new Number(val);
      if (_num < 10000) {
        return _num;
      }
      if (_num > 10000) {
        let num = parseFloat(parseInt(_num) / 10000).toFixed(1);
        return num + "万";
      }
      if (_num > 100000000) {
        let num = parseFloat(parseInt(_num) / 10000).toFixed(1);
        return num + "亿";
      }
    }
  },
  created() {
    this.fetchAds();
    this.fetchNewsCats();
    this.fetchHeroCats();
    this.fetchVideoCats();
  },
  components: {
    listCard
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.pagination-home {
  text-align: right !important;
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
    a {
      text-decoration: none;
    }
  }
  .sprite-arrow {
    &.rotate {
      transform: rotate(180deg);
    }
  }
}
.hero-slide {
  margin: 0 -0.5rem;
  .hero-list {
    width: 20%;
  }
}
.video-slide {
  .video-list {
    width: 50%;
    &:nth-of-type(2n + 1) {
      padding-right: 0.3846rem;
    }
    img {
      height: 7.3077rem;
      border-radius: 2px;
    }
    .video-title {
      line-height: 1.5em;
    }
  }
}
.video-bottom {
  padding: 0.7692rem 0;
}
</style>
