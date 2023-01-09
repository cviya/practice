const fs=require('fs');
const path=require('path');

// 匹配style标签的正则
// 其中\s表示空白字符; \S表示非空白字符; *表示匹配任意次
const regStyle=/<style>[\s\S]*<\/style>/;
// 匹配script标签的正则
const regScript=/<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname,"/../3.clock.html"),"utf-8",(err,data)=>{
    if(err){
        return console.log("文件读取失败",err);
    }else{
        resolveCSS(data);
        resolveHtml(data);
        resolveScript(data);
    }
})
// 定义处理css样式的方法
function resolveCSS(htmlStr){
    // 使用正则提取需要的内容
    const r1=regStyle.exec(htmlStr);
    // 将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS=r1[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname,'../clock/index.css'),newCSS,err=>{
        if(err){
            console.log('写入失败',err);
            
        }else{
            console.log('写入CSS成功');
        }
    })
}
// 定义处理script的方法
function resolveScript(htmlStr){
    const r1=regScript.exec(htmlStr);
    const newScript=r1[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'../clock/index.js'),newScript,err=>{
        if(err){
            return console.log("写入失败",err);
        }else{
            console.log('写入JS成功');
        }
    })
}
// 定义处理html的方法
function resolveHtml(htmlStr){
    const newHtml=htmlStr.replace(regStyle.exec(htmlStr)[0],'<link rel="stylesheet" href="./index.css"/>').replace(regScript.exec(htmlStr)[0],'<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname,'../clock/index.html'),newHtml,err=>{
        if(err){
            return console.log("写入失败",ess)
        }else{
            console.log('写入HTML页面成功');
        }
    })
}
