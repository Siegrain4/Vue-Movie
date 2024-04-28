import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../components/MovieDetail.vue'
import ShowDetail from '../components/ShowDetail.vue'
import ShowView from '../views/ShowView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/movie/:id",
    name: 'detail',
    component: MovieDetail
  },
  {
    path:"/show/:id",
    name: 'tv',
    component: ShowDetail,
  },
  {
    path: "/show",
    name: 'show',
    component: ShowView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
