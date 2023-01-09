const express=require('express');
const app=express();

// 导入路由模块
const route=require("./21.模块化路由");

// 注册路由模块，app.use()函数的作用，就是来注册全局中间件
app.use(route);

app.listen(8000,()=>{
    console.log("服务器已经启动，http://127.0.0.1:8000")
})