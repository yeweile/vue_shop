import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    // 重定向
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home}
  ]
})

//为路由对象，添加beforEach 导航守卫
router.beforeEach((to,from,next)=>{
  // to:将要访问的路劲
  // from:从那个路径跳转来
  // next 是一个函数，表示放行
  // 如果用户访问的是登录页，直接放行
  if(to.path === '/login') return next();
  // 从sessionStorage 中获得的保存token值
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token 强制跳转到登录页
  if(!tokenStr) return next('/login')
  next()
  
})

export default router;
