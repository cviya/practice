// 统一管理API
import requests from "./request";
import mockRequests from './mockRequest'

// 三级联动接口
export const reqCategoryList=()=>{
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

export const reqGetBannerList=()=>{
    return mockRequests.get("/banner")
}

export const reqGetFloorList=()=>{
    return mockRequests.get('/floor')
}

export const reqGetSearchInfo=(params)=>{
    return requests({url:'/list',method:'post',data:params})
}