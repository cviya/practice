import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

// 

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            props:true
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        // 配置重定向，默认时进入home组件
        {
            path:'/',
            redirect:'/home'
        }
    ]
})