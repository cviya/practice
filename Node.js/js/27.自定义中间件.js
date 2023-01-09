const express=require('express');
const app=express();

// 方法1：
// 导入node.js内置的querystring模块
// const qs=require('querystring');
// app.use((req,res,next)=>{
//     // 定义一个str字符串，专门用来存储客户端发送过来的请求体数据
//     let str='';
//     // 监听req的data事件
//     req.on('data',(chunk)=>{
//         str+=chunk;
//     })
//     // 监听req的end事件
//     req.on('end',()=>{
//         // str存放的是完整的请求体数据,用qs.parse方法把字符串格式的请求体数据，解析成对象格式
//         const body=qs.parse(str);
//         console.log(body);
//         req.body=body;
//         next();
//     })
// })

// 方法2：
// 导入28的自定义中间件模块
const bp=require('./28.对自定义中间件模块化');
app.use(bp);
app.post('/user',(req,res)=>{
    res.send(req.body);
})
app.listen('8000',()=>{
    console.log('服务器已经启动,http://127.0.0.1:8000/user');
})