//npm init -y 初始化一个package.json包管理配置文件
// Express中的路由分3部分组成，分别是请求的类型，请求的URL地址，处理函数
const express=require('express');
const app=express();
// app.Method(请求的url地址，处理函数)
app.get('/server',(req,res)=>{
    res.send('Hello');
})
app.listen(8000,()=>{
    console.log('服务已经启动，http://127.0.0.1:8000/server')
})