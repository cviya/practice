const fs=require("fs");
fs.readFile("../txt/score.txt","utf-8",(err,data)=>{
    if(err){
        return console.log("读取文件失败"+err);
    }else{
        // console.log("读取文件成功"+"\n"+data);

        // 先把成绩的数据，按照空格进行分割
        const arrOld=data.split(" ");
        // console.log(arrOld);
        // 循环分割后的数组，对每一项数据，进行字符串的替换操作
        const arrNew=[];
        arrOld.forEach(item=>{
            arrNew.push(item.replace("=",":"))
        })
        // 把新数组中的每一项进行合并，得到一个新的字符串
        const newStr=arrNew.join("\r\n");
        console.log(newStr);
        fs.writeFile("../txt/newScore.txt",newStr,err=>{
            if(err){
                console.log("写入失败"+"\n"+err);
            }else{
                console.log("写入成功"+"\n");
            }
        })
    }
})
