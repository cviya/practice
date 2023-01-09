const express=require('express');
const app=express();
const router=require('./30.apiRouter接口');
app.use(express.urlencoded({extended:false}));
app.use('/jsonp',()=>{
    // 得到客户端的回调函数
    const funcName=req.query.callback;
    // 定义要发送到客户端的数据对象
    const data={name:'zs',age:22};
    // 拼接出一个函数的调用
    const scriptStr=`${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr);
})
app.use('/api',router);
app.listen('8000',()=>{
    console.log('服务器已经启动,http://127.0.0.1:8000/api/get')
})