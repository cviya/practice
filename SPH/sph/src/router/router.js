// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
    {
        path:'/home',
        component:()=>{
           return import('@/pages/Home')
        },
        meta:{show:true}
    },
    {
        name:'search',
        path:'/search/:keyword?',
        // 路由懒加载
        component:()=>{
            return import('@/pages/Search')
        },
        meta:{show:true},
        props:true
    },
    {
        path:'/login',
        component:()=>{
            return import('@/pages/Login')
        },
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        name:'detail',
        path:'/detail/:skuId?',
        component:Detail,
        meta:{show:false}
    },
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{show:false}
    },
    {
        name:'shopcart',
        path:'/shopcart',
        component:ShopCart,
        meta:{show:false}
    },
    {
        name:'trade',
        path:'/trade',
        component:Trade,
        meta:{show:false},
        // 独享路由守卫
        beforeEnter: (to, from, next) => {
            if(from.path=='/showcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name:'pay',
        path:'/pay',
        component:Pay,
        meta:{show:false},
        beforeEnter: (to, from, next) => {
            if(from.path=='trade'){
                next()
            }else{
                next(false)
            }
        }
    },  
    {
        name:'paysuccess',
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show:false}
    },  
    {
        name:'center',
        path:'/center',
        component:Center,
        meta:{show:false},
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            // 配置重定向
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },  
    // 配置重定向，默认时进入home组件
    {
        path:'/',
        redirect:'/home'
    }
]