// 判断服务器上是否存在Upload目录，如果没有的话，创建Upload目录 用途: 传图片
const fs = require('fs');

fs.stat('Upload',(err,stats) => {
  if(err) {
    fs.mkdir('Upload',(error) => {
      if(err) {
        console.log(error);
      } else {
        console.log('文件已创建');
      } 
    });
  } else {
    console.log('当前目录是否已存在:' + stats.isDirectory());
  }
});