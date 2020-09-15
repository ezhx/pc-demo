import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// Vue.use(Antd)

import {Button} from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style/css'
// Vue.component('Button', Button)
Vue.use(Button)

// import {Button, Rate} from 'ant-design-vue'
// Vue.use(Button)
// Vue.use(Rate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
