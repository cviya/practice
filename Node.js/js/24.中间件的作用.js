/* 多个中间件之间，共享同一份req和res。
   基于这样的特性，我们可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，供下游的中间件或路由进行使用
*/
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    // 获取到请求到达服务的时间
    const time=Date.now();
    const date=new Date();
    const clock=date.getFullYear();
    req.sTime=time;
    req.sClock=clock;
    console.log('调用了第一个全局中间件');
    next();
});
app.use((req,res,next)=>{
    console.log('调用了第二个全局中间件');
    next();
})
app.get('/',(req,res)=>{
    res.send('req.sTime='+req.sTime+'\n'+'clock='+req.sClock);
});
app.get('/server',(req,res)=>{
    res.send('clock='+req.sClock);
});
app.listen(8000,()=>{
    console.log('服务已经启动,http://127.0.0.1:8000');
})