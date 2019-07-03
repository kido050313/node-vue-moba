<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/e79fcfe4c1cf569573ff75995aead39a.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/25582bda768733833c0e23468dd31cbe.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/392e511db4e864fd3e6d8a7aa3ecf475.png" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons text-center bg-white mt-3 pt-3 text-gray">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="item in 10" :key="item">
          <i class="sprite sprite-news"></i>
          <span class="display-block py-2">爆料站</span>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow"></i>
        <span class="ml-1">收起</span>
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
        :key="index">
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
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="hero-list p-2 text-center" v-for="(hero, index) in category.heroList" :key="index">
            <img class="w-100" :src="hero.avatar">
            <span class="display-block">{{hero.name}}</span>
          </router-link>
        </div>
      </template>
    </list-card>
    <!-- <m-card icon="card-hero" title="英雄列表"></m-card>
    <m-card icon="video" title="精彩视频"></m-card>
    <m-card icon="gonglve" title="图文攻略"></m-card> -->

  </div>
</template>

<script>
import listCard from "../components/listCard.vue";
import dayjs from 'dayjs'; // 格式化时间插件 
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  name: "home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newCats: [],
      heroCats: []
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list');
      this.newCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list');
      this.heroCats = res.data;
    },
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
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
  }
}

.hero-slide {
  margin: 0 -0.5rem;
  .hero-list {
    width: 20%;
  }
}

</style>
