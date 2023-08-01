import {reqGetCode,reqUserRegister,reqUserLogin, reqGetUserInfo,reqLogOut} from '@/api'
import {setToken,getToken,removeToken} from '@/untils/token'
const state={
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    CLEAR(state){
        state.token=''
        state.userInfo=''
        removeToken()
    }

}
const actions={
    async getCode({commit},phone){
        let result=await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({commit},params){
        let result=await reqUserRegister(params)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({commit},user){
        let result=await reqUserLogin(user)
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
            setToken(result.data.token)
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({commit}){
        let result=await reqGetUserInfo()
        console.log(result)
        if(result.code==200){
            commit('GETUSERINFO',result.data)
        }
    },
    async userLogOut({commit}){
        let result=await reqLogOut()
        if(result.code==200){
            commit('CLEAR')
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