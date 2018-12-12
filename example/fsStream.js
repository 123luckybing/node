const fs = require('fs');
const path = require('path');
const readStream = fs.createReadStream(path.join(__dirname,'index.txt')); // 创建读取数据流
// 读取文件
readStream.on('data', (data) => {
  console.log(data.toString());
});

// 文件读取结束
readStream.on('end',() => {
  console.log('文件读取结束');
});

readStream.on('err',(err) => {
  console.log('文件读取错误');
});