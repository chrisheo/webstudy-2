var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');


function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

var logger = new (winston.Logger)({
    transports: [
        new(winstonDaily)({
            name: 'info-file',
            filename:'./log/server',
            dataPattern:'_yyyy-MM-dd.log',
            colorsize:false,
            maxsize:50000000,
            maxFiles:1000,
            lever:'info',
            showLever:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new (winston.transports.Console)({
            name:"debug-console",
            colorsize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })    
    ]
});


logger.debug('디버깅 메시지입니다.');
logger.error('에러메시지입니다.');
        