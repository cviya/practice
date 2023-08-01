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
import * as API from '@/api'
// 按需引入element-ui的Button
import { Button,MessageBox } from 'element-ui'
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/loading.gif'
Vue.use(VueLazyload,{
  loading:loading
})
// 引入表单校验插件
import '@/plugins/vee-validate'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)
// 全局注册Button
Vue.component(Button.name, Button);

Vue.prototype.$msgbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$router和$route属性
  router,
  // 注册仓库
  store
}).$mount('#app')
