// 引入url模块
const url = require('url');
// url.parse解析url地址

console.log(url.parse('http://www.baidu.com/news'));
console.log(url.parse('http://www.baidu.com'));
// url.resolve 替换二级目录
console.log(url.resolve('http://www.baidu.com/news','/one'));

 // http://www.baidu.com/one