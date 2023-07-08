import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
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
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            props($route){
                return{
                    keyword:$route.params.keyword,
                    k:$route.query.k
                }
            }
        },
        // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path:'*',
            redirect:'/home'
        }
    ]
})