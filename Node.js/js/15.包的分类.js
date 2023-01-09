/*
    项目包：被安装到项目的node_modules目录中的包都是项目包
        项目包又分为两类：
            开发依赖包：被记录到devDependencies 仅在开发期间用到
            核心依赖包：被记录到dependencies 开发和部署后都会用到

    全局包：在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包
*/

// 好用的全局包
/*
i5ting_toc，它是一个可以把md文档转为html页面的小工具，使用步骤如下
1.安装 npm install i5ting_toc -g
2.调用实现 i5ting_toc -f 要转换的md文件路径 -o
*/

/*
    规范的包结构
    1.包必须以单独的目录而存在
    2.包的顶级目录下要必须包含package.json这个包管理配置文件
    3.package.json必须包含name,version,main三个属性，分别代表包的名字，版本号，包的入口
*/

/*
 发布包到npm官网
    1.创建根目录cwy_tools
    2.根目录下创建三个文件：
        1.package.json
        2.index.js
        3.README.md
    3.在根目录打开终端输入命令npm login,登录自己的账号，然后npm publish就可以上传自己的包到npm官网了

 删除已发布的包
    输入命令： npm unpublish cwy_tools --force
*/

