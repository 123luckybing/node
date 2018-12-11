// npm 安装就是这么引入的
// 去node_modules里面找，bar文件夹里面package.json里的入口文件
const bar = require('bar');
console.log(bar.name);