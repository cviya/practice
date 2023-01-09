// 导入mysql模块
const mysql=require('mysql');
// 建立与MySQL数据库的连接关系
const db=mysql.createPool({
    host:'127.0.0.1', //数据库的ip地址
    user:'root', //登录数据库的账号
    password:'admin123', //登录数据库的密码
    database:'my_db_01' //指定要操作哪个数据库
});
// 查询mysql中id为2的users表
// db.query('select * from users where id=2',(err,results)=>{
//     if(err){
//        return console.log(err);
//     }else{
//         console.log(results);
//     }
// })

// 向users表中新增一条数据，其中username的值为Spider-Man,password的值为pcc123
// const user={username:'SpiderMan',password:'pcc123'};
// // values后面的?为占位符
// const insertStr='insert into users (username,password) values (?,?)';
// // 通过数组填充?占位符，依次为?占位符指定具体的值
// db.query(insertStr,[user.username,user.password],(err,result)=>{
//     if(err){
//         console.log(err.message);
//         // result对象下有一个affectedRow用来判断是否有数据插入
//     }else if(result.affectedRows===1){
//         console.log('插入数据成功');
//     }
// })

// // 插入数据便捷方式
// const user={username:'superman',password:'123'};
// // 如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入
// const insertSql='insert into users set ?';
// db.query(insertSql,user,(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else if(result.affectedRows===1){
//         console.log('数据插入成功！');
//     }
// })


// // 更新数据
// const user={id:3,username:'flashMan',password:'fff'};
// const updateSql='update users set username=?,password=? where id=?';
// db.query(updateSql,[user.username,user.password,user.id],(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else if(result.affectedRows===1){
//         console.log('更新数据成功！');
//     }
// })

// 更新数据便捷方式
// const user={id:2,username:'batman',password:'bbb'};
// const updateSql='update users set ? where id=?';
// db.query(updateSql,[user,user.id],(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else if(result.affectedRows===1){
//         console.log('更新数据成功！');
//     }
// });

// 删除数据
// const deleteSql='Delete from users where id=?'
// db.query(deleteSql,14,(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else if(result.affectedRows===1){
//         console.log('删除成功');
//     }
// })

// 使用delete语句会真正把数据从表中删除掉，推荐使用标记删除，也就是update,模拟删除的动作
db.query('update users set status=1 where id=?',12,(err,result)=>{
    if(err){
        console.log(err.message);
    }else if(result.affectedRows===1){
        console.log('删除成功');
    }
})