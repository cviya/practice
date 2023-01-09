// 包的入口文件
const data=require('./src/dataFormat');
const escape=require('./src/htmlEscape')

module.exports={
    // 用...将data和escape的所有属性暴露出来
    ...data,
    ...escape
}