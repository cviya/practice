import Vue from 'vue'
import App from './App.vue'
// 三级联动组件 ---全局组件
import TypeNav from '@/components/TypeNav'
// 引入路由
import router from '@/router/index'

import store from '@/store'


Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
