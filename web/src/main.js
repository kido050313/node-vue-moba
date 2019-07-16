import Vue from 'vue'
import App from './App.vue'

import './assets/iconfont/iconfont.css'
import './assets/styles/style.scss'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
