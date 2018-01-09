import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routes = [
  {
    path: '/', component: (resolve) => require(['@/pages/main.vue'], resolve), children: [
      {
        path: '/index', component: (resolve) => require(['@/pages/index/index.vue'], resolve)
      },
      {
        path: '/info', component: (resolve) => require(['@/pages/info/info.vue'], resolve)
      },
      {
        path: '/mine', component: (resolve) => require(['@/pages/mine/mine.vue'], resolve)
      }
    ], redirect: '/index'
  },
  {
    path: '/detail/:id', component: (resolve) => require(['@/pages/detail/detail.vue'], resolve)
  },
  {
    path: "*", component: (resolve) => require(['@/pages/404.vue'], resolve)
  }
]
export default new Router({
  routes,
  // mode: 'history',
  // base: '/dist/', 
})
