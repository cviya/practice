const fs=require("fs");
// 出现路径拼接错误的问题，是因为提供了./或../开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径，vscode中右键文件，复制路径即可得到完整路径
// fs.readFile("../txt/1.txt","utf-8",function(err,data){
//     if(err){
//         return console.log("读取失败"+err);
//     }else{
//         console.log("读取成功"+data)
//     }
// })

// 但是填写绝对路径的移植性非常差，不利于维护
// fs.readFile("D:\\File\\VsCode\\Node.js\\txt\\1.txt","utf-8",function(err,data){
//     if(err){
//         return console.log("读取失败"+err);
//     }else{
//         console.log("读取成功"+data)
//     }
// })

// __dirname表示当前文件所处的目录
fs.readFile(__dirname+"/../txt/1.txt","utf-8",function(err,data){
    if(err){
        return console.log("读取失败"+err);
    }else{
        console.log("读取成功"+data)
    }
})