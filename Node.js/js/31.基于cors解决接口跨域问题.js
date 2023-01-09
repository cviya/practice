// 1.安装 npm install cors
// 2.配置 cors这个中间件，解决接口跨域问题 const cors=require('cors'); 
// 3.调用 app.use(cors());

// 什么是CORS
/*
    CORS(跨域资源共享)，由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否组织前端JS代码跨域获取资源
    浏览器的同源安全策略默认回阻止网页“跨域”获取资源，只有配置了CORS相关的HTTP响应头才能解决浏览器的跨域访问限制
    CORS相关的三个响应头：
        1.Access-Control-Allow-Origin，语法如下：
            res.setHeader("Access-Control-Allow-Origin","*");  //允许来自任何网站的请求
            res.setHeader("Access-Control-Allow-Origin","http://www.baidu.com");  //只允许来自百度网站的请求

        2.Access-Control-Allow-Headers，默认情况下,CORS仅支持客户端向服务器发送9个请求头：
            Accept,Accept-Language,Content-Language,DPR,Downlink,Save-Data,Viewport-Width,Width,Content-Type，如果要发送额外的请求头信息，要对额外的请求头进行声明
            res.setHeader('Access-Control-Allow-Headers','*'); //允许发送所有请求头
            res.setHeader('Access-Control-Allow-Headers','Content-type','Accept'); //允许客户端额外向服务器发送Content-Type请求头和Accept请求头

        3.Access-Control-Allow-Methods，默认情况下，CORS仅支持客户端发起GET，POST，HEAD请求
            如果客户端希望通过PUT，DELETE等方式请求服务器资源，语法如下：
            res.setHeader('Access-Control-Allow-Methods','*'); //允许所有http请求方法
            res.setHeader('Access-Control-Allow-Methods','PUT,DELETE'); //只允许PUT和DELETE请求方法
*/

/*
    CORS请求的分类
        客户端在请求CORS接口时，根据请求方式和请求头的不同，可以将CORS的请求分为两大类，分别是：
            1.简单请求
                同时满足两大条件：1.请求方式：GET，POST，HEAD三者之一  2.HTTP头部信息不超过以下几种字段：无自定义头部字段，9个请求头范围之内
            2.预检请求
                1.不满足简单请求的 2.向服务器发送了application/json格式的数据
        在浏览器与服务器正式通信前，浏览器回发送option请求进行预检，以获知服务器是否允许该实际请求，服务器成功响应预检请求后，才会发送真正的请求，并携带真实数据
*/
