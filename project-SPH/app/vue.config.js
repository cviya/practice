const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn'
        // target:'http://39.98.123.211'
      }
    }
  }
})
