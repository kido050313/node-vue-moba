<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between pt-2">
      <div class="nav-item" :class="{active: active === index}"
           v-for="(category, index) in categories" :key="index"
           @click="$refs.listSwiper.swiper.slideTo(index)"
      >
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="listSwiper" :options="{autoHeight: true}" @slide-change="() => active = $refs.listSwiper.swiper.realIndex">
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "listCard",
  props: {
    icon: {type: String, required: true},
    title: {type: String, required: true},
    categories: {type: Array, required: true}
  },
  data() {
    return {
      active: 0
    }
  },
  components: {
    "m-card": Card
  }
};
</script>
