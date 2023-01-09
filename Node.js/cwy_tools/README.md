<!-- 
    name代表名称
    version版本
    main入口
    description包描述
    keywords关键字
    license许可协议

    "name": "wy_tools",
    "version": "1.0.0",
    "main": "index.js",
    "description": "仅用于测试",
    "keywords": ["cwy"],
    "license": "ISC"
 -->
 ## 安装
 npm install cwy_tools
 ## 导入
 ```js
 const cwy_tools=require('wy_tools')
 ```
## 格式化时间
```js
 console.log(cwy_tools.dataFormat());
```
## 转义&还原HTML特殊字符
```js
 const str="<h1>hello&hi</h1>";
 const html=cwy_tools.htmlEscape(str);
 console.log(html);
 const str2=cwy_tools.htmlUnEscape(html);
 console.log(str2);
```
## 开源协议
ISC