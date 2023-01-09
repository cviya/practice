// 导入http模块
const http=require('http');
// 创建web服务器实例
const server=http.createServer();
// 为服务器实例绑定request事件，监听客户端的请求
// req是请求对象，它包含了与客户端相关的数据和属性，例如：
// req.url是客户端请求的URL地址
// req.method是客户端的method请求类型
server.on('request',(req,res)=>{
    // 只要有人访问了网站，终端就会输出以下字符串
    console.log("有人访问了服务器");
})
// 启动服务器
server.listen(8000,()=>{
    console.log("服务器已经启动，8000监听中,http://127.0.0.1");
})