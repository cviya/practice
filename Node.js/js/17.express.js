// Express是一个Web开发框架
// Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的
// Express的本质：就是一个npm上的第三方包，提供了快速创建Web服务器的便捷方法

/*
    对于前端程序员来说，最常见的两种服务器分别是:
        Web网站服务器：专门对外提供Web网页资源的服务器
        API接口服务器：专门对外提供API接口的服务器
    使用express可以方便的创建以上两种服务器
*/

// 创建基本的web服务器
const express=require('express');
const app=express();


// app.get()，可以监听客户端的GET请求，参数1：客户端请求的url地址  参数2：请求对应的处理函数req,res
// 坚硬客户端的GET和POST请求，并向客户端响应具体内容
app.get('/user',(req,res)=>{
    // 调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name:'zs',age:20});
})
app.post('/user',(req,res)=>{
    // 向客户端响应一个文本字符串
    res.send('请求成功');
})
app.get('/',(req,res)=>{  //例：http://127.0.0.1:8000/?username=zs&age=20
    // req.query默认是一个空对象
    // 客户端使用?name=zs&age=20这种查询字符串形式，发送到服务器的参数可以通过req.query对象访问到
    res.send(req.query);
})
// URL地址中，可以通过:参数名 的形式，匹配动态参数值 例：http://127.0.0.1:8000/user/:3/zs
app.get('/user/:id/:name',(req,res)=>{
    console.log(req.params);
    // 客户端会显示id:3,name:zs
    res.send(req.params);
})

app.listen(8000,()=>{
    console.log("服务已经启动,http://127.0.0.1:8000");
})