import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:'AboutNews',
        component:()=>import('../views/AboutNews.vue')
      },
      {
        path:'AboutMessage',
        component:()=>import('../views/AboutMessage.vue')
      }
    ]
  },
    {
      path:'/user/:userId',
      name:'用户',
      component:()=>import('../views/User')

    },
    {
      path:'/profile',
      name:'档案',
      component:()=>import('../views/Profile')

    }

]

const router = new VueRouter({
  routes,
  mode: 'history',//去掉#
})

//实现网页title的变化
//前置守卫，guard，回调
router.beforeEach((to, from, next) => {
  document.title=to.name;
  next()
})



export default router
