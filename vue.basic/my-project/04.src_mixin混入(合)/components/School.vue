<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'MySchool',
    data(){
        return {
            name:'尚硅谷',
            address:'深圳'
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>