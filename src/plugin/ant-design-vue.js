/*
 * @Author: hx
 * @Date: 2020-09-16 14:54:05
 * @Last Modified by: hx
 * @Last Modified time: 2020-09-16 15:09:45
 * @des:ant-design-vue文件
 */
import Vue from 'vue'

// 全局引入
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// Vue.use(Antd)

// 按需引入
// import {Button} from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style/css'
// Vue.component('a-button', Button)//Vue.use(Button)

// 按需引入(需配置babel>babel-plugin-import,无需引入样式)
import {Button, Rate} from 'ant-design-vue'
Vue.use(Button)
Vue.use(Rate)
