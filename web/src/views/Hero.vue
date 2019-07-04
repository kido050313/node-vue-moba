<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <img src="../assets/images/logo.png" height="30">
      <div class="px-2 flex-1">
        <span>王者荣耀</span>
        <span class="ml-3">攻略战</span>
      </div>
      <router-link to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2 fs-lg">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="div" class="text-gray">
            皮肤： 2 &gt;
          </router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="bg-white px-3">
        <div class="nav jc-around pt-3 py-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="bg-white p-3 border-bottom">
              <div class="d-flex">
                <router-link class="btn btn-lg flex-1" to="/" tag="button">
                  <i class="iconfont icon-Play text-primary"></i>
                  <span>英雄介绍视频</span>
                </router-link>
                <router-link class="btn btn-lg flex-1 ml-2" to="/" tag="button">
                  <i class="iconfont icon-image text-primary"></i>
                  <span>一图识英雄</span>
                </router-link>
              </div>

              <!-- skills -->
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img
                   class="icon"
                   @click="currentSkillIndex = index"
                   :class="{active: currentSkillIndex === index}"
                   v-for="(item, index) in model.skills"
                   :key="index"
                   :src="item.icon">
                </div>
                <div>
                  <div class="d-flex ai-center">
                    <h3 class="text-dark-light fs-lmg">{{currentSkill.name}}</h3>
                    <span class="ml-5 fs-sm text-gray-2">(
                      冷却值：{{currentSkill.delay}}
                      消耗：{{currentSkill.cost}}
                      )</span>
                  </div>
                  <p class="text-dark-light">{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <p class="text-gray-2">小提示：{{currentSkill.tips}}</p>
                </div>
              </div>
            </div>

            <m-card plain icon="jianyi" title="出装推荐" class="hero-items">
              <div class="text-dark-light fs-lmg py-2">顺风出装</div>
              <div class="d-flex jc-around pt-1 text-center">
                <div
                 class="d-flex flex-column"
                 v-for="(item, index) in model.items1"
                 :key="index">
                  <img class="icon" :src="item.icon">
                  <span class="fs-xs">{{item.name.slice(0,4)}}</span>
                </div>
              </div>
              
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>222</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: 'Hero',
  props: {
    id: {required: true}
  },
  data() {
    return {
      model: null,
      currentSkillIndex: 0,
    }
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex]
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch()
  },
  components: {
    "m-card": Card
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    .scores {
      .badge {
        margin: 0 0.4615rem;
        display: inline-block;
        width: 1.1538rem;
        height: 1.1538rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.2);
        font-size: 0.9231rem;
      }
    }
  }
  .skills {
    img.icon {
      width: 65px;
      height: 65px;
      border: 3px solid transparent;
      &.active {
        border-color: map-get($colors, 'primary' );
      }
      border-radius: 50%;
    }
  }
  .hero-items {
    img.icon{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>
