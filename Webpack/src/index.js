import $ from 'jquery'

// 导入样式
import './css/index.css'
import './css/index.less'

import logo from './images/logo.png'
$('.box').attr('src',logo)

// 定义jquery入口函数
$(function(){
    // 实现奇偶行变色效果
    $('li:odd').css('background-color','yellow');
    $('li:even').css('background-color','red')
})


// 定义装饰器函数（高级语法，webpack无法打包）
function info(target){
    target.info='Person info'
}
@info
class Person{}
console.log(Person.info);