/*
exports.add = function(a,d){
  return a+d;
}
*/
var Calc = require('./hello');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함');
