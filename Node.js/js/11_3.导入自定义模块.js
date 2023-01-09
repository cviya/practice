// 外界用require()方法导入自定义模块时，得到的永远都是module.exports所指向的对象
const m=require('./11_2.自定义模块');
console.log(m);
m.sayHello()