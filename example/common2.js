// 如果没写路径(找不到的话)，node.js会去node_modules下面找
const tool = require('tool');
console.log(tool.add(1,2));
console.log(tool.sayHello());