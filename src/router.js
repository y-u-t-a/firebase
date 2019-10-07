import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import BootstrapVue from 'bootstrap-vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(VueHead, {
  complement: `Yuta Ueno's Page` // 「inner | complement」の形式で title が設定される
})
Vue.use(BootstrapVue)

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
