const fs=require("fs");
const { resolve } = require("path");

function readHuixiangoushu(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/回乡偶书.md",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function readJingyesi(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/静夜思.md",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function readWeixue(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/为学.md",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

async function main(){
    let huixiangoushu=await readHuixiangoushu();
    let jingyese=await readJingyesi();
    let weixue=await readWeixue();
    console.log(huixiangoushu.toString());
    console.log(jingyese.toString());
    console.log(weixue.toString());
}
main();