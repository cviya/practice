/*
    1.安装node.js，安装完成后cmd验证是否安装成功，输入命令：node -v
    2.重启vscode，在Ajax文件夹中右键，在集成终端中打开,输入命令npm init --yes，然后再输入npm i express
*/
// 3.引入express
// const { response } = require('express'); 打着打着忽然多出来的代码
const express=require('express');
// 4.创建应用对象
    const app=express();
// 5.创建路由规则
                // request是对请求报文的封装
                // response是对响应报文的封装
    app.get('/',(request,response)=>{
        // 设置响应
        response.send('Hello express');
    });
// 6.监听端口启动服务
    app.listen(8000,()=>{
        console.log("服务已经启动,8000窗口监听中......");
    });