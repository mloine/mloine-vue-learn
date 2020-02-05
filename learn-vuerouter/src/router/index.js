// 配置路由
import VueRouter from 'vue-router'

//  1.通过vue.use 传入路由插件
import Vue from 'vue'
Vue.use(VueRouter)

//  2.创建路由对象
import Home from "../components/Home";
import About from "../components/About";

const routes = [
  // 默认 设置重定向到主页
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },{
    path:'/about',
    component:About
  }
]

const router = new VueRouter({
  // 配置路由和组件的配置关系
  routes:routes,
  mode:'history', // 改变路由模式 为history
  linkActiveClass:'mloine'
})


//3. 将router 传到vue实例
export default router


