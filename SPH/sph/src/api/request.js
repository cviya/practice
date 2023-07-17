// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'

// 利用axios对象的方法create，去创建一个axios实例
const requests=axios.create({
    baseURL:'/api',
    timeout:5000
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    // 进度条开始动
    nprogress.start();
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nprogress.done()
    return res.data
},(err)=>{
    return Promise.reject(new Error('fail'))
})

export default requests