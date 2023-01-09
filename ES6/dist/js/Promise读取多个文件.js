"use strict";

var fs = require("fs");

var _require = require("path"),
    resolve = _require.resolve;

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


var p = new Promise(function (resolve, reject) {
    fs.readFile("./resources/为学.md", function (err, data) {
        resolve(data);
    });
});
p.then(function (value) {
    return new Promise(function (resolve, reject) {
        fs.readFile("./resources/回乡偶书.md", function (err, data) {
            resolve([value, data]);
        });
    });
}).then(function (value) {
    return new Promise(function (resolve, reject) {
        fs.readFile("./resources/静夜思.md", function (err, data) {
            value.push(data);
            resolve(value);
        });
    }).then(function (value) {
        console.log(value.join("\r\n"));
    });
});