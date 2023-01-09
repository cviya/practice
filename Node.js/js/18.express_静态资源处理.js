const express=require('express');
const app=express();
// express.static(),通过它可以非常方便的创建一个静态资源服务器,如果要托管多个静态资源目录，多次调用static函数，但是查找到了就不会访问下一个静态资源了
// 用户输入：http://127.0.0.1:8000/index.html即可访问
// app.use(express.static('../clock'));

// express.static()添加一个路径，需要用户输入：http://127.0.0.1:8000/路径/index.html才能访问
app.use('/clock',express.static('../clock'))
app.listen(8000,()=>{
    console.log('服务器已经启动，http://127.0.0.1:8000/index.html');
})