<template>
  <div>
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
import MySchool from './components/School.vue'
import MyStudent from './components/Student.vue'

export default {
    name:'App',
    components:{
        MySchool,MyStudent
    }
}
</script>

<style>

</style>