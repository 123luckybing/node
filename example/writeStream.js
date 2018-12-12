const fs = require('fs');
const path = require('path');
const data = '我是周芳冰<br/>';
const writeStream = fs.createWriteStream(path.join(__dirname,'index.txt')); // 创建写流
// 写入5次 for循环
for(var i = 0;i < 5; i++ ) {
  writeStream.write(data,'UTF8'); // 把data写进去
}
writeStream.end(); // 写完毕
writeStream.on('finish',() => {
  console.log('写入完成');
});
writeStream.on('err',() => {
  console.log('写入失败');
});