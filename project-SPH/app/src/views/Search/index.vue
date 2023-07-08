<template>
  <div>
    <!-- <TypeNav v-show="!$route.meta.show"/> -->
  </div>
</template>

<script>
import TypeNav from '../../components/TypeNav'
export default {
    name:'Search',
    components:{TypeNav},
    props:['keyword','k']
}
</script>

<style>

</style>