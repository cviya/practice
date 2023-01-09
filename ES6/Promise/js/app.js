// 入口文件

// 模块引入
import * as m1 from "./m1.js"
import * as m2 from "./m2.js"
import * as m3 from "./m3.js"
// console.log(m1);
// console.log(m2);
// console.log(m3);
// m3.default.address();
// console.log(m2.school);
// m2.intro();

//修改背景颜色为粉色
// 1.先安装jquery，集成终端中输入npm i jquery 
// 2.npx babel Promise/js -d dist/js --presets=babel-preset-env 转化
// 3.npx browserify dist/js/app.js -o dist/bundle.js
import $ from 'jquery'
$('body').css('background','pink');