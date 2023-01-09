// 导入fs模块，fs模块是node自带的api
const fs=require("fs");
// 格式 fs.readFile("路径","[编码格式(可选项)]","回调函数");
fs.readFile("../../ES6/Promise/resources/回乡偶书.md","utf-8",(err,data)=>{
        // 打印失败的结果：1.如果读取成功，则err的值为null  2.如果读取失败，则err的值为错误对象，data的值为undefined
        // console.log(err);
        // console.log(data);

        // 判断文件是否读取成功
        if(err){
            return console.log("读取文件失败"+"\n"+err);
        }else{
            console.log("读取文件成功"+"\n"+data);
        }
})