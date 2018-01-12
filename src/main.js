// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import './assets/css/base.css';
import 'mint-ui/lib/style.css'
import App from './App.vue'

import service from '@/service/index.js'
Vue.prototype.$service=service
Vue.use(MintUI)

//模拟数据，正式环境删除以下
import '../mock/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
