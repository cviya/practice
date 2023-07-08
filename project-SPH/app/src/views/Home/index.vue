<template>
  <div>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{ListContainer,Recommend,Rank,Like,Floor,Brand,},
    computed:{
      ...mapState['count']
    },
    methods: {

    },
}
</script>

<style>

</style>