var Calc = require('./calc3');

var calc1 = new Calc();
calc1.emit('stop');

console.log('Calc 에 stop이벤트 전달.');