 //console.log("안녕?");
/*
 var result = 0;
  console.time('duration_sum');

  for (var i = 0; i <= 100; i++) {
      result += i;
  }

  console.timeEnd('duration_sum');
  console.log('1부터 100까지 더한 결과물 : %d',result);
*/
/*
var Person = {name:"소녀시대",age:20};
console.dir(Person);

console.log('현재 실행한 파일 이름 : %s', __filename);
console.log('현재 실행한 디렉토리 : %s', __dirname);
*/
/*
if (process.argv.length>2) {
 console.log('세번째 파라미터 값 : %s', process.argv[2]);
}
*/
/*
var calc ={};
calc.add = function(a,b){
  return a+b;
}
console.log('모듈로 분리하기 전 -calc.add 함수 호출 결과 : %d',calc.add(10,10));
*/
/*
var calc = require('./calc');
console.log('모듈로 분리한 후 : %d',calc.add(10,10));
*/
/*
var nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수 값 : %s', nconf.get('OS'));
*/
/*
var path = require('path');

var directories = ['users','mike','docs'];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);
*/
/*
var path = require('path');

var filename = "c:\\user\\test\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉토리 : %s 파일이름 : %s,  확장자 : %s',dirname, basename
, extname);
*/
/*
function add(a,b){
  return a+b;
}

var result = add(10,10);
console.log('더하기 (10, 10) : %d', result);
*/
/*
var Person = {};
Person['age'] = 20;
Person['name'] = "소녀시대";
var oper = function(a,b){
  return a+b;
}
Person['add'] = oper;
console.log('더하기 : %d', Person.add(10,10));
*/
/*
function add(a, b, callback){
  var result = a+b;
  callback(result);
}
add(10,10,function(result){
  console.log("파라미터로 전달된 콜백함수 호출됨.");
  console.log("더하기 : %d", result);
});
*/
/*
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.walk = function(speed){
  console.log(speed + "걸어갑니다.");
}
var person1 = new Person('소녀시대',20);
console.log(person1.name + "객체가 호출한다");
person1.walk(10);
*/
/*
var url = require('url');

var curURL = url.parse('https://www.naver.com');
var curStr = url.format(curURL);

console.log('주소 문자열 : %s',curStr);
console.dir(curURL);

var querystring = require('querystring');  //요청 파라미터 중 쿼리 값
var param = querystring.parse(curURL.query);
*/
 //P115
 /*
 var util = require('util');
 var EventEmitter = require('events').EventEmitter;

 var Calc = function(){
   var self = this;

   this.on('sotp', function(){
      console.log('Calc에 stop evsnt 전달됨');
   });
 };

 util.inherits(Calc, EventEmitter);
 Calc.prototype.add = function(a,b){
   return a+b;
 }

 module.exports = Calc;
 module.exports.title = 'calculator';
*/
/*
var fs = require('fs');

// 파일을 동기식으로 IO로 읽어들입니다.

var data = fs.readFileSync('package.json', 'utf8'); // Syn 이개 붙어 있어서 동기식으로 처리
console.log(data);
*/
/*
// 비동기를 더 많이 사용하니까 이거랑 익숙해지기!
var fs = require('fs');

// 파일을 비동기식으로 IO로 읽어 들입니다.
fs.readFile('package.json' , 'utf8', function(err, data){
  // 읽어들인 데이터를 출력합니다.
  console.log(data);
});
console.log('프로젝터 폴더 안의 package.json 파일을 읽도록 요청했습니다.'); // 여기가 먼저 실행되고 fs함수가 실행됨
*/
/*
var fs = require('fs');

// 파일에 데이터를 씁니다.
fs.writeFile('./output.txt', 'Hello World', function(err){
  if(err){
    console.log('Erroe : ' + err);
  }
  console.log('output.txt 파일에 데이터 쓰기 완료');
});
// writeFile() 메소드는 첫번째 파라미터로 파일 이름을 전달 받음.
// 두번째 파라미터 : 파일에 쓸 내용
// 세번째 파라미터 : 작업이 끝나면 호출되는 콜백 함수 >> 오류 객체가 null이 되면 데이터 쓰기가 완료된 것.
*/
/*
var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd){
  if(err) throw err;

  var buf = new Buffer('안뇽?! \n');
  fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
    if(err) throw err;

    console.log(err, written, buffer);
    console.log(err, written, buffer);

    fs.close(fd, function(){
      console.log("파일 열고 데이터 쓰고 파일 닫기 완료");
    });
  });
});
*/
/*
var fs = require('fs');

//파일에서 데이터를 읽어 들입니다.
fs.open('./output.txt','r',function(err, fd){
  if(err) throw err;

  var buf = new Buffer(10);
  console.log('버터 타입 : %s', Buffer.isBuffer(buf));

  fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
    if(err) throw err;

    var inStr= buffer.toString('utf8',0,bytesRead);
    console.log('파일에서 읽어온 데이터 : %s',inStr);

    console.log(err, bytesRead, buffer);

    fs.close(fd, function() {
      console.log("output.txt  파일을 열고 읽고 완료");
    });
  });
});
*/
/*
// 버퍼 객체를 크기만 지정하여 만든 후 문자열을 씁니다.
var output = "안녕 1?";
var buffer1 = new Buffer(10);
var len = buffer1.write(output,'utf8');
console.log('첫번째 버퍼의 문자열 : %s', buffer1.toString());
 //버퍼 객체를 문자열을 이용해 만듭니다.
var buffer2 = new Buffer('안녕 2!','utf8');
console.log('두번째 버퍼의 문자열 : %s', buffer2.toString());

 //타입을 확인합니다.
console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer1));

// 버퍼 객체에 들어 있는 문자열 데이털ㄹ 문자열 변수로 만듭니다.
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8',0,byteLen);
var str2 = buffer2.toString('utf8');

//첫번째 버퍼 객체의 문자열을 두 번째 버퍼의 객체로 복사합니다.
buffer1.copy(buffer2,0,0,len);
console.log("두번째 버퍼에 복사한 후의 문자열을 : %s", buffer2.toString('utf8'));

//두 개의 버퍼를 붙여줍니다.
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("두 개의 버퍼를 붙인 후 문자열 : %s", buffer3.toString('utf8'));
*/
/*
var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags:'r'});
var outfile = fs.createWriteStream('./output.txt',{flags:'w'});

infile.on('data',function(data){
  console.log('읽어 들인 데이터', data);
  outfile.write(data);
});

infile.on('end', function(){
  console.log('파일 읽기 종료.');
  outfile.end(function(){
    console.log("파일 쓰기 종료.");
  });
});
*/
/*
var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname , function(exists){
  if(exists){
    fs.unlink(outname, function(err){ // UNLINK 함수를 사용하여 이전에 같은 이름의 파일을 삭제하기
      if(err) throw err;
      console.log('기존 파일 [' + outname+'] 삭제함.');
    });
  }
  var infile = fs.createReadStream(inname, {flags:'r'});
  var outfile = fs.createWriteStream(outname, {flags : 'w'});
  infile.pipe(outfile); // pipe로 연결만 했는대도 복사된것을 확인할 수 있따.
  console.log('파일 복사 [' +inname+'] -> ['+outname+']');
});
*/
/*
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
  // 파일을 읽어 응답을 스트림과 pipe()로 연결합니다.
  var instream = fs.createReadStream('./output.txt');
  instream.pipe(res);
});
server.listen(7001,'192.168.1.31');
*/
/*
var fs = require('fs');
fs.mkdir('./docs', 0666, function(err){
  if(err) throw err;
  console.log("새로운 docs 폴더를 만들었습니다.");

  fs.rmdir('./docs', function(err){
    if(err) throw err;
    console.log("docs 폴더를 삭제하시겠습니까?");
  });
});
*/
var winston = require('winston'); // 로그처리모듈
var winstonDaily = require('winston-daily-rotate-file'); //로그 일변 처리 모듈
var moment = require('moment');

function timeStampFormat(){
  return monent().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
  // ex) '2016-05-01 20:14:28.500 +0900'
}

var logger = new(winston.Logger)({
  transports :[
    new (winstonDaily)({
      name : 'info-file',
      filename:'./log/server',
      datePattern :'_yyy-MM-dd.log',
      colorize:false,
      maxsize : 50000000,
      maxFiles : 1000,
      level :'info',
      showLevel : true,
      json:false,
      timestamp : timeStampFormat
    })
  ],
  exceptionHandlers :[
    new (winstonDaily)({
      name : 'exception-file',
      filename:'./log/exception',
      datePattern :'_yyy-MM-dd.log',
      colorize:false,
      maxsize : 50000000,
      maxFiles : 1000,
      level :'error',
      showLevel : true,
      json:false,
      timestamp : timeStampFormat
    }),
    new (winston.transports.Console)({
      name:'exception-console',
      colorize:true,
      level:'debug',
      showLevel:true,
      json:false,
      timestamp:timeStampFormat
    })
  ],

});
