import { reqGetSearchInfo } from "@/api"
const state={
    searchList:{}
}
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
}
const actions={
    // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    async getSearchList({commit},params={}){
        const result=await reqGetSearchInfo(params);
        console.log("list结果",result)
        if(result.code==200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
// 用于计算属性，项目当中getters主要的作用是：简化仓库中的数据
// 可以把我们将来在组件当中需要用的数据简化一下
const getters={
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}
export default {
    state,mutations,actions,getters
}