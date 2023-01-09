const express=require('express');
const app=express();
// 定义中间件
const mw=(req,res,next)=>{
    console.log('调用了局部生效的中间件');
    next();
}
// 可以定义多个中间件
const mw2=(req,res,next)=>{
    console.log('调用了第二个局部生效中间件');
    next();
}
// mw,mw2这个中间件只在当前路由中生效，这种用法属于局部生效的中间件
app.get('/',mw,mw2,(req,res)=>{ //等价于app.get('/',[mw,mw2],(req,res))
    res.send('hello');
});

app.get('/server',(req,res)=>{
    res.send('hi');
})

app.listen('8000',()=>{
    console.log('服务已经启动，http://127.0.0.1:8000')
})