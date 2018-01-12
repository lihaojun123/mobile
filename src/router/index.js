import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)
let routes = [
  {
    path: '/', component: (resolve) => require(['@/pages/container.vue'], resolve), children: [
      {
        path: '/index', component: (resolve) => require(['@/pages/index/index.vue'], resolve)
      },
      {
        path: '/info', component: (resolve) => require(['@/pages/info/info.vue'], resolve), children:[
            {
              path: '/info/demo1', component: (resolve) => require(['@/pages/info/demo/demo1.vue'], resolve)
            },
            {
              path: '/info/demo2', component: (resolve) => require(['@/pages/info/demo/demo2.vue'], resolve),meta: {
                requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
              }
            },
            {
              path: '/info/demo3', component: (resolve) => require(['@/pages/info/demo/demo3.vue'], resolve)
            },
            {
              path: '/info/demo4', component: (resolve) => require(['@/pages/info/demo/demo4.vue'], resolve)
            },
            {
              path: '/info/demo5', component: (resolve) => require(['@/pages/info/demo/demo5.vue'], resolve)
            }
        ]
      },
      {
        path: '/mine', component: (resolve) => require(['@/pages/mine/mine.vue'], resolve), meta: {
          requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        }
      }
    ], redirect: '/index'
  },
  {
    path: '/detail/', component: (resolve) => require(['@/pages/detail/detail.vue'], resolve)
  },
  {
    path: '/login/', component: (resolve) => require(['@/pages/login/login.vue'], resolve)
  },
  {
    path: "*", component: (resolve) => require(['@/pages/404.vue'], resolve)
  }
]
let router = new Router({
  mode: 'history',
  routes
})
//需要登录的页面 路由守卫
router.beforeEach((to, from, next) => {
   if(to.matched.some(recode=>recode.meta.requireAuth)){
     let ssoSigin = sessionStorage.getItem('ssosign');
     if(ssoSigin){
         NProgress.start();
         next();
     }else{
        next({
          path:'/login',
          query:{
              redirect:to.fullPath
          }
        })
     }
   }else{
    NProgress.start();
    next();
   }
   //全局需要登录的页面  
  // if (to.path == '/login') {
  //   sessionStorage.removeItem('ssosign');
  // }
  // let ssosign = sessionStorage.getItem('ssosign');
  // if (!ssosign && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   NProgress.start();
  //   next()
  // }
});

router.afterEach((to, from) => {
  NProgress.done();
})


export default router;