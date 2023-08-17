import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../components/Login.vue'
//import Reporte1 from '../components/Reporte1.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:require(/* webpackChunkName: "about" */ '../views/Home.vue').default
    //component: Login
  },
  {
    path: '/productos',
    name: 'Productos',
    component: require('../components/Productos.vue').default
  },
  {
    path: '/lineas',
    name: 'Lineas',
    component: require('../components/Lineas.vue').default
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
