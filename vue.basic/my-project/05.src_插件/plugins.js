export default {
    install(Vue){
        console.log('install安装成功')
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        }),
        Vue.directive('fbind',{
            // 指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value=binding.value
                
            },
            // 指令所在元素被插入页面
            inserted(element){
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                element.value=binding.value
            }
        }),
        Vue.prototype.hello=()=>{
            alert('你好')
        }
    }
}