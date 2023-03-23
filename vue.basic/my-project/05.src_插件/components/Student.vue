<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sayHello">点我弹窗说你好</button>
  </div>
</template>

<script>
export default {
    name:'MyStudent',
    data(){
        return {
            name:'张三',
            sex:'男'
        }
    },
    methods: {
      sayHello(){
        this.hello()
      }
    },
}
</script>

<style>

</style>