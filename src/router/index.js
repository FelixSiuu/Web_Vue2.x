import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Cart from '@/views/Cart/Cart.vue'
import User from '@/views/User/User.vue'
import Login from '@/views/Login/Login.vue'
import Info from '@/views/bars/Info.vue'
import Authority from '@/views/bars/Authority.vue'
import Goods from '@/views/bars/Goods.vue'
import Orders from '@/views/bars/Orders.vue'
import System from '@/views/bars/System.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/cart', component: Cart },
  { path: '/login', component: Login },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: Info },
      { path: 'info', component: Info },
      { path: 'authority', component: Authority },
      { path: 'goods', component: Goods },
      { path: 'orders', component: Orders },
      { path: 'system', component: System }
    ]
  }
]

const router = new VueRouter({
  routes
})
// Navigation Guards
router.beforeEach((to, from, next) => {
  const pathArr = ['/user', '/user/info', '/user/authority', '/user/goods', '/user/orders', '/user/system']
  if (pathArr.indexOf(to.path) !== -1) {
    const token = sessionStorage.getItem('token')
    if (token) next()
    else next('/login')
  } else {
    next()
  }
})

export default router
