<template>
    <div>
        <MySchool></MySchool>
        <hr>
        <MyStudent></MyStudent>
    </div>
</template>

<script>
import MyStudent from './components/School.vue'
import MySchool from './components/Student.vue'
export default {
    name:'App',
    components:{
        MySchool,MyStudent
    }
}
</script>

<style>

</style>