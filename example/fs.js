const fs = require('fs');
const path = require('path');
// fs.stat 是文件还是目录
fs.stat('node_modules',(err,stats) => {
  if(err) {
    console.log(err);
  } else {
    console.log('文件：' + stats.isFile());
    console.log('目录：' + stats.isDirectory());
  }
});

// fs.readFile() 读取文件
// 文件路径问题 path.join: https://blog.csdn.net/CHENYUFENG1991/article/details/60474644
fs.readFile( path.join(__dirname,'index.txt') ,(err,data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});


