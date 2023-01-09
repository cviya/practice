const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    // req.url是客户端请求的url地址
    const url=req.url;
    // req.method是客户端请求的method类型
    const method=req.method;
    console.log(`您请求的是 ${url},and request method is ${method}`);
    // 为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html;charset=utf-8
    res.setHeader('Content-Type','text/html;Charset=utf-8');
    // res是响应对象，它包含了与服务器相关的数据和属性，例如：
    // 要发送到客户端的字符串
    console.log(res.end(`您请求的 url is ${url},and request method is ${method}`));
});
server.listen(8000,()=>{
    console.log('server running at http://127.0.0.1:8000')
});