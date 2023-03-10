/*
    不同开发模式的身份认证
        服务器渲染推荐使用Session认证机制
        前后端分离推荐使用JWT认证机制
*/

/*
    Cookie特性：
        自动发送
        域名独立
        过期时限
        4kb限制
    不具有安全性，不建议服务器将重要的隐私数据通过Cookie形式发送给浏览器

    会员卡+刷卡认证的设计理念，就是Session认证机制的精髓
*/