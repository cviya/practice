<template>
    <div>
        <MySchool name='cwy' :age=15 sex='男'></MySchool>
    </div>
</template>

<script>
import MySchool from './components/Student.vue'
export default {
    name:'App',
    components:{
        MySchool
    }
}
</script>

<style>

</style>