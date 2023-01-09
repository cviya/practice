const express=require('express');
const router=express.Router();

router.get('/get',(req,res)=>{
    // 通过req.query获取客户端通过查询字符串发送到服务器的数据
    const query=req.query;
    res.send({
        status:0, //0表示成功，1表示失败
        msg:'Get请求成功', //状态的描述
        data:query //需要响应给客户端的数据
    })
});

router.post('/post',(req,res)=>{
    // 通过req.body获取请求体中包含的url-encoded格式的数据
    const body=req.body;
    res.send({
        status:0,
        msg:'POST请求成功',
        data:body
    })
})

module.exports=router;


