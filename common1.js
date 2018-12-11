const http = require('http');
const data = require('./data'); // 引入数据模块

const app = http.createServer( (req,res) => {
  res.writeHead(200, {"Content-Type":"text/html:charset='utf-8'"});
  res.write('hello world');
  console.log(data);
  res.end();
});

app.listen(3000,() => {
  console.log('server is running at 3000');
});