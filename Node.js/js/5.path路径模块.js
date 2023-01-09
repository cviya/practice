const path=require('path');
const fs=require('fs');
// path.join(),可以拼接路径
fs.readFile(path.join(__dirname,"/../txt/1.txt"),"utf-8",(err,data)=>{
    if(err){
        return console.log('读取失败',err);
    }else{
        console.log('读取成功',data);
    }
})

// path.basename(),获取字符串中的文件名
const pathStr="../txt/score.txt";
const pathName=path.basename(pathStr);//只填写一个参数会有扩展名
console.log(pathName);
const pathNameWithoutExt=path.basename(pathStr,".txt");//填写第二个参数可以移除扩展名.txt
console.log(pathNameWithoutExt);

// path.extname(),获取路径中的文件扩展名
const fext=path.extname(pathStr);
console.log(fext);

