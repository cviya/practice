// 终端输入npm i xxx 或者 npm install xxx  可以通过@符号指定安装具体的版本，例：npm i moment@2.22.2
// 下载moment包，npm i moment
// 导入moment包
const moment=require('moment');
console.log(moment().format('YYYY-MM-DD, hh:mm:ss'));

// 所有安装的包都会自动生成到node_modules目录下，
// 安装包后，会自动生成package.json，该文件的dependencies记录了我们安装了哪些包

/*
上传项目到github时我们都会把node_modules剔除掉，因为它太大了
所以当我们导入项目都会缺少node_modules，此时可以从package.json文件中查找我们安装了哪些包，然后用npm install可以一键安装缺失的包
*/ 

// 卸载包命令 npm uninstall xxx

// 如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把包记录到devDependencies节点中，例：
// npm i xxx -D 或 npm install xxx --save-dev

// 小工具 nrm 可以快速查看和切换下包的镜像源  npm i nrm -g 全局下载nrm工具    命令：nrm ls查看下包的镜像源  nrm use xxx切换下包的镜像源 