<template>
            <div class="demo">
            <h2>学生姓名:{{studentName}}</h2>
            <h2>学校年龄:{{age}}</h2>
            </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default { 
        name:'Student',
        data(){
                return{
                    studentName:'尚硅谷',
                    age:14,
                }
            }
        }
</script>
