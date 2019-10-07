import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

Vue.use(Router)
Vue.use(VueHead, {
  complement: `Yuta Ueno's Page` // 「inner | complement」の形式で title が設定される
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
