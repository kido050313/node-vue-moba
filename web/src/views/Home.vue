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
        <div class="py-2" v-for="(news, index) in category.newsList" :key="index">
            <span>[{{news.categoryName}}]</span>
            <span>|</span>
            <span>{{news.title}}</span>
            <span>{{news.date}}</span>
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
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newCats: [
        {
          name: '热门',
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '新闻',
            title: '6月29日全服不停机修复公告',
            date: '07/01'
          }))
        },
        {
          name: '新闻',
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '新闻',
            title: '6月29日全服不停机修复公告',
            date: '07/01'
          }))
        },
        {
          name: '公告',
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '公告',
            title: '6月29日全服不停机修复公告',
            date: '07/01'
          }))
        },
        {
          name: '活动',
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '活动',
            title: '6月29日全服不停机修复公告',
            date: '07/01'
          }))
        },
        {
          name: '赛事',
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '赛事',
            title: '6月29日全服不停机修复公告',
            date: '07/01'
          }))
        },
      ]
    }
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
</style>
