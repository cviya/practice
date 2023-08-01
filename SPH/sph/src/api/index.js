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

export const reqGoodsInfo=(skuId)=>{
    return requests({url:`/item/${skuId}`,method:'get'})
}

export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}

export const reqCartList=()=>{
    return requests({url:'/cart/cartList',method:'get'})
}

export const reqDeleteCartById=(skuId)=>{
    return requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
}

export const reqUpdateCheckedById=(skuId,isChecked)=>{
    return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}

export const reqGetCode=(phone)=>{
    return requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
}

export const reqUserRegister=(params)=>{
    return requests({url:'/user/passport/register',method:'post',data:params})
}

export const reqUserLogin=(params)=>{
    return requests({url:'/user/passport/login',method:'post',data:params})
}

export const reqGetUserInfo=()=>{
    return requests({url:'/user/passport/auth/getUserInfo',method:'get'})
}

export const reqLogOut=()=>{
    return requests({url:'/user/passport/logout',method:'get'})
}

export const reqAddressInfo=()=>{
    return requests({url:'/user/userAddress/auth/findUserAddressList',method:"get"})
}

export const reqGetOrderInfo=()=>{
    return requests({url:'/order/auth/trade',method:'get'})
}

export const reqSubmitOrder=(tradeNo,params)=>{
    return requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data:params})
}

export const reqPayInfo=(orderId)=>{
    return requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
}

export const reqPayStatus=(orderId)=>{
    return requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
}

export const reqMyOrderList=(page,limit)=>{
    return requests({url:`/order/auth/${page}/${limit}`,method:'get'})
}