module.exports.name='张三';
module.exports.sayName=function(){
    console.log('我的名字叫：'+this.name);
}
const age=13;
module.exports.age=age;

// 让module.exports指向一个全新的对象，不再是上面的对象
module.exports={
    nickname:'李四',
    sayHello(){
        console.log('Hello');
    }
}