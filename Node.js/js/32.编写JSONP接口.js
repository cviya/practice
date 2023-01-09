/*
 JSONP概念与特点
    概念：浏览器通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用，这种请求数据的方式叫做JSONP
    特点：JSONP不属于真正的Ajax请求，没有XMLHttpRequest对象 仅支持GET请求
*/

// 必须在配置cors中间件之前，配置JSONP的接口
