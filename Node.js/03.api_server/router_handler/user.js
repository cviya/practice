// 导入数据库操作模块
const db=require('../db/index');
// 导入bcryptjs包,负责加密
const bcrypt=require('bcryptjs');
// 导入生成token的包
const jwt=require('jsonwebtoken');
// 导入全局的配置文件
const config=require('../config');

// 注册新用户处理函数
exports.regUser=(req,res)=>{
    const userinfo=req.body;
    // 对表单中的数据进行合法性的校验
    // if(!userinfo.username || !userinfo.password){
    //     // return res.send({status:1,message:'用户名或密码不合法'})
    //     return res.cc('用户名或密码不合法');
    // }
    // 定义sql语句，查询用户名是否被占用
    const sqlStr='select * from ev_users where username=?'
    db.query(sqlStr,[userinfo.username],(err,result)=>{
        if(err){
            // return res.send({status:1,message:err.message})
            return res.cc(err);
        }
        // length>0就表示查到了相关数据
        if(result.length>0){
            // return res.send({status:1,message:'用户名被占用，请更换其他用户名！'})
            return res.cc('用户名被占用，请更换其他用户名！');
        }else{
            // 调用bcrypt.hashSync()对密码进行加密,第二个参数提高密码的安全性
            userinfo.password=bcrypt.hashSync(userinfo.password,10)
            // 定义插入新用户的sql语句
            const sql='insert into ev_users set ?';
            db.query(sql,{username:userinfo.username,password:userinfo.password},(err,result)=>{
                if(err){
                    // return res.send({status:1,message:err.message});
                    return res.cc(err);
                }
                if(result.affectedRows!==1){
                    // return res.send({status:1,message:'注册用户失败，请稍后再试！'});
                    return res.cc('注册用户失败，请稍后再试！');
                }else{
                    return res.cc('注册成功',0);
                }
            })
        }
    })
}

// 登录处理函数
exports.regLogin=(req,res)=>{
    const userinfo=req.body;
    const sql=`select * from ev_users where username=?`;
    db.query(sql,userinfo.username,(err,result)=>{
        if(err){
            return res.cc(err);
        }
        if(result.length!==1){
            return res.cc('登陆失败');
        }
        // 对比密码
        const compareResult=bcrypt.compareSync(userinfo.password,result[0].password);
        if(compareResult!==true){
            return res.cc('密码不匹配');
        }
        
        // 在服务器端生成token的字符串
        const user={...result[0],password:'',user_pic:''};
        const tokenStr=jwt.sign(user,config.jwtSecretKey,{expiresIn:'10h'});
        res.send({
            status:0,
            message:'登陆成功',
            token:'Bearer '+tokenStr
        })
    })
}
