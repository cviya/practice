import { reqAddressInfo,reqGetOrderInfo } from "@/api"
const state={
    userAddress:[],
    orderInfo:{}
}
const mutations={
    USERADDRESS(state,userAddress){
        state.userAddress=userAddress
    },
    ORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo
    }
}
const actions={
    async getUserAddress({commit}){
        let result=await reqAddressInfo()
        if(result.code==200){
            commit('USERADDRESS',result.data)
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async getOrderInfo({commit}){
        let result=await reqGetOrderInfo()
        if(result.code==200){
            commit('ORDERINFO',result.data)
        }else{
            return Promise.reject(new Error('fail'))
        }   
    }

}
const getters={

}

export default{
    state,mutations,actions,getters
}