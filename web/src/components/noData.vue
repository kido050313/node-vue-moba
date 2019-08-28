<template>
  <div class="container">
    <img class="default-img" :src="image" alt />
    <div class="default-text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'no_data',
  props: {
    image: { default: require('../assets/images/default.jpg'), type: String },
    text: { default: '啊哦，暂无数据', type: String }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  text-align: center;
  background: #fff;
  .default-img {
    margin-top: 100px;
    width: 200px;
    height: 200px;
  }
  .default-text {
    font-size: 16px;
    color: #333;
  }
}
</style>