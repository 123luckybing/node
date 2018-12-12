// 同步异步问题
// https://blog.csdn.net/yihanzhi/article/details/79564023
for(var i=0;i<3;i++){
  setTimeout(function(){
      console.log(i); //3,3,3
  },0)
}
// setTimeout异步，等着任务队列执行完再执行，任务队列for循环执行完后，i=3