<template>
  <div class="school">
    <h1 v-text="msg" ref="title"></h1>
     <button @click="showDOM">点我输出上面的信息</button>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
   
  </div>
</template>

<script>
export default {
    name:'MySchool',
    data(){
        return {
            name:'尚硅谷',
            address:'深圳',
            msg:'欢迎来到尚硅谷'
        }
    },
    methods: {
        showDOM(){
            console.log(this.$refs.title)
        }
    },
}
</script>

<style>
    .school{
        background-color: yellow;
    }
</style>