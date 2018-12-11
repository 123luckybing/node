// 引入http模块 http模块和url模块为内置模块，安装了node就可以使用
const http = require('http');
// 建立http服务链接
http.createServer( (require,response) => {
  // 浏览器响应头 状态码200 
  response.writeHead(200,{"Content-Type": "text/html;charset = 'utf-8'"});
  response.write('hello world!!'); // 浏览器body
  response.write('hello-zfb');
  console.log(require.url); // 打印地址
  response.end(); // 结束响应
}).listen(3000); // 监听3000端口
