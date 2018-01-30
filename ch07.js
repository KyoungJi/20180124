/*
var http = require('http');

var options = {
  host : 'www.google.com',
  port : 80,
  path : '/'
};

var req = http.get(options, function(res){
  //응답처리
  var resData ='';
  res.on('data', function(chunk){
      resData += chunk;
  });

  res.on('end', function(){
    console.log(resData);
  });
});

req.on('error', function(err){
  console.log("오류발생 : " + err.message);
});
*/
var http = require('http');

var opts ={
  host : 'www.google.com',
  post : 80,
  method : 'POST',
  path : '/',
  headers:{}
};

var resData = '';
var req = http.request(opts, function(res){
  // 응답처리
  res.on('data', function(chunk){
    resData += chunk;
  });

  res.on('end', function(){
    console.log(resData);
  });
});

opts.headers['Content-Type'] = 'app;pcation/x-www-from-urlcoded';
req.data = "q=ator";
opts.headers['Content-Lenght'] = req.data.length;

req.on('error',function(err){
  console.log("오류발생 : " +err.message);
});

//요청승인
req.write(req.data);
req.end();
