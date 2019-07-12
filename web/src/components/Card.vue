<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center" :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-menu1 fs-xxl" v-if="!plain"></i>
    </div>
    <div class="card-body pt-2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    plain: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.card {
  border-bottom: 1px solid $border-color;
}
</style>
