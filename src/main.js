import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import request from './api/request'

Vue.config.productionTip = false

Vue.use(request)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
