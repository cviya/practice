import { reqCategoryList } from "@/api"
export default {
    namespaced: true,
    state: {
        categoryList: [],
    },
    actions: {
        // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
        async categoryList(context) {
            let result = await reqCategoryList()
            console.log(result)
            if (result.code === 200) {
                context.commit('CATEGORYLIST', result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, value) {
            state.categoryList = value
        }
    },
    getters: {

    }
}