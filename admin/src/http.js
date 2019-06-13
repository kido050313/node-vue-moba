import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.response.use( res => {
  return res
}, err => {
  if(err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  return Promise.reject(err)
})

http.interceptors.request.use(function(config) {
  config.headers.Authorization = 'Bearer ' + localStorage.token
  return config
}, function(error) {
  return Promise.reject(error)
})

export default http