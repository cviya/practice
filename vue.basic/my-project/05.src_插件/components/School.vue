<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'MySchool',
    data(){
        return {
            name:'尚硅谷atguigu',
            address:'深圳'
        }
    }
}
</script>

<style>

</style>