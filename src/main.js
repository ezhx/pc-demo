import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ant-design-vue
import '@/plugin/ant-design-vue.js'

// 工具类
import rs from '@/utils/index.js'
Vue.prototype.$rs = rs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
