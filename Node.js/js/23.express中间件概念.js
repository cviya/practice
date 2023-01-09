// 格式 中间件函数的形参列表中，必须包含next参数，而路由处理函数中只包含req和res
// app.get('/',function(req,res,next))
// next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由

// 定义中间件函数
const express=require('express');
const app=express();
// const mw=function(req,res,next){
//     console.log("这是简单的中间件函数");
//     // 把流转关系，转交个下一个中间件或路由
//     next();
// }
// // 将mw注册为全局生效的中间件
// app.use(mw);

// 简化形式
app.use((req,res,next)=>{
    console.log('这是一个间单的中间件函数');
    next();
})
app.get('/',(req,res)=>{
    res.send('home page');
})
app.listen(8000,()=>{
    console.log('服务器已经启动,http://127.0.0.1:8000')
})