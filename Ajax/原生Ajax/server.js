// 启动服务器，在终端输入node server.js
    // 引入express
const express=require("express");
    // 创建应用对象
const app=express();
    // 创建路由规则
    // request是对请求报文的封装
    // response是对响应报文的封装
app.get('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 设置响应体
    response.send("Hello GET");
});
app.post('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 允许自定义响应头
    // response.setHeader("Access-Control-Allow-Headers","*");
    // 设置响应体
    response.send("Hello POST");
});
// all可以接收任意类型的请求
app.all('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 允许自定义响应头
    response.setHeader("Access-Control-Allow-Headers","*");
    // 设置响应体
    response.send("Hello ALL");
});
app.all('/json-server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    // 允许自定义响应头
    response.setHeader("Access-Control-Allow-Headers","*");
    // 响应一个js数据
    const data={
        name:"陈威洋",age:18
    };
    // 将js数据转换为JSON字符串
    let str=JSON.stringify(data);
    // 设置响应体   response.send只能接收字符串，如果不是字符串，会自动转换为JSON字符串
    response.send(data);
});

    // 针对ie缓存
    app.get('/ie',(request,response)=>{
        // 设置响应头 设置允许跨域
        response.setHeader("Access-Control-Allow-Origin","*");
        // 设置响应体
        response.send("Hello ie缓存 -2");
    });

    // 针对请求超时和网络异常处理
    app.get("/delay",(request,response)=>{
        response.setHeader("Access-Control-Allow-Origin","*");
        // 3秒后响应
        setTimeout(()=>{
            response.send("延时响应了");
        },3000);
    });

    // axios请求
    app.all("/axios",(request,response)=>{
        response.setHeader("Access-Control-Allow-Origin","*");
        response.setHeader("Access-Control-Allow-Headers","*");
        response.send("Hello axios");
    });
    
    // fetch请求
    app.all("/fetch",(request,response)=>{
        response.setHeader("Access-Control-Allow-Origin","*");
        response.setHeader("Access-Control-Allow-Headers","*");
        response.send("Hello fetch");
    })

    // jsonp请求
    app.all("/jsonp",(request,response)=>{
        const data={
            name:"cwy"
        };
        let str=JSON.stringify(data);
        // ${变量}模板字符串格式
        response.end(`show(${str})`);
    })

    // 用户名检测是否存在
    app.all("/check-username",(request,response)=>{
        const data={
            exist:1,
            msg:"用户名已经存在"
        };
        let str=JSON.stringify(data);
        // ${变量}模板字符串格式
        response.send(`show(${str})`);
    })

app.listen(8000,()=>{
    console.log("服务已经启动，8000监听中...");
})