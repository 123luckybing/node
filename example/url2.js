const url = require('url');
const http = require('http');
http.createServer((req,res) => {
  // 输入 http://localhost:3000/news?name=zfb 拿到name
  // 输入 http://localhost:3000/news?name=zfb&cid 拿到cid
  const urlDetail = url.parse(req.url,true); // 第一个参数地址、第二个参数是true，转化成对象
  const urlquery = urlDetail.query;
  console.log(urlquery.cid); //zfb
  console.log(urlquery.name); // 空
  res.writeHead(200,{"Content-Type": "text/html;charset = 'utf-8'"});
  res.write('world');
  res.end();
}).listen(3000);