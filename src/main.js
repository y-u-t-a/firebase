import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Meta)
Vue.use(Router)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
