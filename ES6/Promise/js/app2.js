// import * as m1 from "./sayHello.js"
var btn=document.getElementById("btn");
btn.onclick=function(){
    import("./sayHello.js").then(module=>{
        console.log(module);
        module.sayHello();
    })
}