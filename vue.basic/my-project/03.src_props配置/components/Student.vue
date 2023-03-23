<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="addAge">点我年龄+1</button>
  </div>
</template>

<script>
export default {
    name:'MyStudent',
    data(){
        return {
            msg:'欢迎来到尚硅谷',
            myAge:this.age
        }
    },
    methods: {
        addAge(){
            this.myAge++
        }
    },
    props:['name','sex','age'] //简单接收

    // 接收的同时对数据进行类型限制 
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    // props:{
    //     name:{
    //         type:String, //name类型是字符串
    //         required:true //名字是必要的
    //     },
    //     age:{
    //         type:Number,
    //         default:15 //默认值
    //     },
    //     sex:{
    //         type:String,
    //         required:true
    //     }
    // }
}
</script>

<style>

</style>