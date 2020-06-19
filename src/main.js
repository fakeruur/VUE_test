import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//----------------------------------------
// import axios from 'axios'
//
// const instance = axios.create({
//   baseURL:'http://httpbin.org',
//   timeout:5000
// })
//
// instance({
//   url: '/get',
// }).then(res=>{
//   console.log(res);
// })
//
// axios({
//   url:'http://httpbin.org/post',
//   method:'post'
// }).then(res=>{
//   console.log(res);
// })
//--------------
// import {request} from "./network/request";
//
// request({
//   url:'/get',
// }).then(res=>{
//   console.log(res);
// }).catch(res=>{
//   console.log(res);
// })