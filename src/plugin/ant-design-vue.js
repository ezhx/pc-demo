/*
 * @Author: hx
 * @Date: 2020-09-16 14:54:05
 * @Last Modified by: hx
 * @Last Modified time: 2020-09-18 10:07:06
 * @des:ant-design-vue文件
 */
import Vue from 'vue'

// 全局引入
// import Antd from 'ant-design-vue/es'
// import 'ant-design-vue/dist/antd.less'
// Vue.use(Antd)

// 按需引入
// import {Button} from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style/css'
// Vue.component('a-button', Button)//Vue.use(Button)

// 按需引入(需配置babel>babel-plugin-import,无需引入样式)
import {Button} from 'ant-design-vue'
Vue.component(Button.name, Button)
