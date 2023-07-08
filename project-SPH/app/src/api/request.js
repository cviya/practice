//对于axios进行二次封装
import axios from 'axios'
import nprogress from 'nprogress';
// 引入进度条样式
import 'nprogress/nprogress.css'

const request=axios.create({
    // 基础路径，发请求时候，路径会自带/api
    baseURL:'/api',
    // 代表请求超时的时间
    timeout:5000
})
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config)=>{
    // 进度条开始动
    nprogress.start();
    return config;
})
// 响应拦截器，在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.response.use((res)=>{
// 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到
    nprogress.done()
    return res.data
},(err)=>{
// 响应失败的回调函数

})
export default request

