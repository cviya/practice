const express=require('express');
const app=express();
// 配置cors跨域
const cors=require('cors');
const Joi = require('@hapi/joi');

app.use(cors());

// 配置解析application/x-www-form-urlencoded格式的表单数据中间件
app.use(express.urlencoded({extended:false}))

// 配置优化发往客户端的信息代码
app.use((req,res,next)=>{
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error?err.message:err
        })
    }
    next();
})

// 一定要在路由之前配置解析token的中间件
const expressJwt=require('express-jwt');
const config=require('./config');
// 指定哪些接口不需要token身份认证
app.use(expressJwt({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}));

// 导入并注册用户路由模块
const userRouter=require('./router/user');
app.use('/api',userRouter);
// 导入并使用用户信息的路由模块
const userinfoRouter=require('./router/userinfo');
app.use('/my',userinfoRouter);
// 导入并使用文章分类的路由模块
const artCateRouter=require('./router/artcate');
app.use('/my/article',artCateRouter);
// 导入发布新文章的路由模块
const articleRouter=require('./router/article');
app.use('/my/article',articleRouter);

// 定义错误级别的中间件
app.use((err,req,res,next)=>{
    // 验证失败导致的错误
    if(err instanceof Joi.ValidationError){
        return res.cc(err);
    }
    // 身份认证失败后的错误
    if(err.name==='UnauthorizedError'){
        return res.cc('身份认证失败');
    }
    res.cc(err);
})

app.listen(8000,()=>{
    console.log('服务器已经启动,http://127.0.0.1:8000');
})