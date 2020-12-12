import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
  router, // router 配置参数注入路由
  render: h => h(App),
}).$mount('#app')