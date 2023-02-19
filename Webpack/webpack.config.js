const path=require('path')
const HtmlPlugin=require('html-webpack-plugin')
const htmlPlugin=new HtmlPlugin({
    // 指定要复制哪个页面
    template:'./src/index.html',
    // 指定复制出来的文件名和路径
    filename:'./index.html'
})
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
    mode:'development', //可选值有development（开发阶段）和production（发布阶段）
    // 在开发调试阶段，建议大家都把devtool的值设置为eval-source-map
    devtool:'nosources-source-map',
    // 指定要处理哪个文件
    entry:path.join(__dirname,'./src/index.js'),
    // 指定生成的文件放到哪里
    output:{
        path:path.join(__dirname,'dist'),
        filename:'js/main.js'
    },
    plugins:[htmlPlugin,new CleanWebpackPlugin()],
    devServer:{
        open:true,
        port:8080,
        host:'127.0.0.1'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.jpg|png|gif$/,use:['url-loader?limit=22229&outputPath=images']},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    resolve:{
        alias:{
            // 告诉webpack，程序员写的代码中@表示src这一层目录
            '@':path.join(__dirname,'./src/')
        }
    }
}
