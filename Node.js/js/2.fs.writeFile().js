const fs=require("fs");
// 参数1：文件的存放路径   参数2：要写入的内容  参数3：编码格式(可选项)   参数4：回调函数
// 格式 fs.writeFile("路径","要写入的内容","[编码格式(可选项)]","回调函数");
fs.writeFile("../txt/1.txt","hell3o",err=>{
    // 如果文件写入成功，则err的值等于null 如果文件写入失败，则err的值等于一个错误对象
    // console.log(err);

    // 判断文件是否写入成功
    if(err){
        return console.log("文件写入失败"+"\n"+err);
    }else{
        console.log("文件写入成功");
    }
})