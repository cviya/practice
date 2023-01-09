// exports和module.exports指向同一个对象，最终共享的结果，还是以module.exports指向的对象为准
const name='cwy';
exports.username=name;
exports.age=24;
exports.sayHi=function(){
    console.log('Hi');
}