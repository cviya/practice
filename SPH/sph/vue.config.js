const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //项目打包忽略map
  productionSourceMap:false,
  transpileDependencies: true,
  lintOnSave:false,
  // 代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn'
      }
    }
  }
})
