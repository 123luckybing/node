1. 修改代码自动重启工具(自动刷新页面): supervisor 
   npm -g install supervisor
   使用：node url.js  改成 supervisor url.js
   改代码自动重启node
2. example文件夹下面是例子学习代码
3. npm 命令详解
  （1）npm -v 查看npm版本
  （2）npm install 模块名称: 安装模块 但是这种安装之后不会在package.json中体现
      npm install 模块名称 --save: 安装好之后会出现在package.json中 (以后要--save)
  （3）npm uninstall 模块名称: 卸载模块
  （4）npm list: 看看当前目录下已经安装了哪些包
   (5)npm info 模块名称: 查看模块的详情信息
   (6)npm install 模块名称@版本号 :安装制定某个模块的摸个版本  eg: npm install jquery@1.1.1
   (7) npm init: 生成package.json

   "supervisor": "^0.12.0"  ^表示第一位版本号不变，后面两位取最新的
                            ~表示前两位不变，最后一个是最新的
                            .表示三位都是最新的

  下载慢的话：cnpm install 先下载cnpm : npm install -g cnpm --registry=https://registry.npm.taobao.org
  4. mkdir 文件名称: 创建文件