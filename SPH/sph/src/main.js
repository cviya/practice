import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入mock
import "@/mock/mockServe"
// 引入swiper样式
import 'swiper/css/swiper.css'
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$router和$route属性
  router,
  // 注册仓库
  store
}).$mount('#app')
