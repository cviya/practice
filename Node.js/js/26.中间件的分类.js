/*
    五大类：
        应用级别的中间件
            通过app.use()或app.get()或app.post()，绑定到app实例上的中间件，叫做应用级别的中间件
        路由级别的中间件
            绑定到express.Router()实例上的中间件，用法和应用级别中间件没有任何区别
        错误级别的中间件
            作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题
            格式：必须有4个形参，分别是(err,req,res,next)
            注意：错误级别中间件必须注册在所有路由之后
        Express内置的中间件
            Express内置了3个常用的中间件
                1.express.static(),快速托管静态资源的内置中间件,例如：HTML文件，图片，CSS样式等
                2.express.json解析JSON格式的请求体数据
                3.express.urlencoded解析URL-encoded格式的请求体数据
        第三方的中间件
*/

// 错误级别的中间件实例
// const express=require('express');
// const app=express();
// app.get('/',(res,req)=>{
//     // 人为抛出错误，会作为err.message发出
//     throw new Error('服务器内部发生错误啦');
//     res.send('hello');
// });
// app.use((err,req,res,next)=>{
//     console.log('发生错误',err.message);
//     res.send('Error'+err.message);
// });

// app.listen('8000',()=>{
//     console.log('服务器已经启动,http://127.0.0.1:8000');
// });

// Express内置的中间件实例
// const express=require('express');
// const app=express();
// // 配置解析application/json格式数据的内置中间件,否则json格式数据会显示undefined
// app.use(express.json());
// // 配置解析application/x-www-form-urlencoded格式数据的内置中间件
// app.use(express.urlencoded({extended:false}));
// app.post('/',(req,res)=>{
//     // 通过postman选择body,点击raw，选择json格式，写入json格式数据
//     console.log(req.body);
//     res.send('已调用');
// });
// app.post('/book',(req,res)=>{
//     // 通过postman选择body,点击x-www-form-urlencoded
//     // 在服务器端通过req.body来获取json格式的表单数据和url-encoded格式的数据
//     console.log(req.body);
//     res.send('ok');
// })
// app.listen('8000',()=>{
//     console.log('服务器已经启动,http://127.0.0.1:8000');
// });

/* 第三方的中间件
   非express官方内置的，而是第三方开发出来的中间件，在express@4.16.0之前的版本中，经常使用body-parser这个第三方中间件，来解析请求体数据
        1.运行npm install body-parser
        2.使用require导入中间件
        3.调用app.use()注册并使用中间件
*/
const express=require('express');
const parser=require('body-parser');
const app=express();
// app.use(express.urlencoded({extended:false}));
app.use(parser.urlencoded({extended:false}));
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('ok');
})
app.listen('8000',()=>{
    console.log('服务器已经启动,http://127.0.0.1:8000');
});