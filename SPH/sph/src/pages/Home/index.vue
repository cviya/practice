<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Brand from './Brand'
import Floor from './Floor'
import Like from './Like'
import {mapState} from 'vuex'

export default {
  name:'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Brand,
    Floor,
    Like
    },
     computed:{
        ...mapState({
            floorList:(state)=>{
                return state.home.floorList
            }
        })
    },
    mounted() {
        this.$store.dispatch('getFloorList')
    },
}
</script>

<style>

</style>