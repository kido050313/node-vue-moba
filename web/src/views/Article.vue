<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-1 bor">
      <i class="iconfont icon-Back text-blue"></i>
      <strong class="flex-1 text-blue pl-2">{{model.title}}</strong>
      <div class="text-gray fs-xs">2019-06-19</div>
    </div>
    <div v-html="model.body" class="body px-3 fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
        class="py-1 text-ellipsis"
        tag="div"
        :to="`/articles/${item._id}`"
        v-for="(item, index) in model.related"
        :key="index">
        {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  watch: {
    id: 'fetch'
    // 第二种写法
    // id() {
    //   this.fetch
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-Back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>

