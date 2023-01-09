// 为了方便对路由进行模块化管理，express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块
const express=require('express');
// 创建路由对象
const route=express.Router();
// 挂载具体的路由
route.get('/server',(req,res)=>{
    res.send('hello get');
})
route.post('/',(req,res)=>{
    res.send('hello post');
})

// 向外导出路由对象
module.exports=route;