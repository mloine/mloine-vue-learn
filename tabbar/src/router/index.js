import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cat = () => import("../views/cat/Cat")
const Profile = () => import("../views/profile/Profile")

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },  {
    path:'/category',
    component:Category
  },  {
    path:'/cato',
    component:Cat
  },  {
    path:'/profile',
    component:Profile
  },
]

export default new Router({
  routes: routes,
  mode:'history'
})
