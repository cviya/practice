const fs=require('fs');
const path=require('path');
const http=require('http');
const server=http.createServer();
server.on('request',(req,res)=>{
    const url=req.url;
    // 把请求的URL地址映射为具体文件的存放路径
    // const fpath=path.join(__dirname,`../${url}`);
    let fpath='';
    if(url==='/'){
        fpath=path.join(__dirname,'../clock/index.html');
    }else{
        fpath=path.join(__dirname,'../clock',url);
    }
    // 根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf-8',(err,data)=>{
        if(err){
            return res.end('404 Not Found');
        }else{
            res.end(data);
        }
    });
})
server.listen(8000,()=>{
    console.log("服务已经启动,http://127.0.0.1:8000");
})