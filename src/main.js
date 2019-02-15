// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import { store } from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$ajax = axios

// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#"+ Math.random().toString(16).slice(2,8);
//   }
// })

Vue.filter('intercept80',function(value){
  if(!value) return '';
  return value.toString().slice(0,80) 
})

Vue.filter('intercept200',function (value) { 
  if(!value) return '';
  return value.toString().slice(0,200) + '...'
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
