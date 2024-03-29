import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import './styles/style.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

// 全局mixin
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload';
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
