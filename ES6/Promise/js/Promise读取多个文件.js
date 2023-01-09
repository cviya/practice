const fs=require("fs");
const { resolve } = require("path");

// 回调地狱
// fs.readFile("./resources/为学.md",(err,data1)=>{
//     fs.readFile("./resources/回乡偶书.md",(err,data2)=>{
//         fs.readFile("./resources/静夜思.md",(err,data3)=>{
//            let result=data1+data2+data3;
//            console.log(result);
//         });
//     })
// })

// 使用promise实现
const p=new Promise((resolve,reject)=>{
    fs.readFile("./resources/为学.md",(err,data)=>{
        resolve(data);
    })
})
p.then(value=>{
   return new Promise((resolve,reject)=>{
    fs.readFile("./resources/回乡偶书.md",(err,data)=>{
        resolve([value,data]);
    })
   })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/静夜思.md",(err,data)=>{
            value.push(data);
            resolve(value);
        })
    }).then(value=>{
        console.log(value.join("\r\n"));
    })
})