/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 16:59
 * @Description:  logs日志
*/
const morgan = require('koa-morgan');
const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.resolve(__dirname, '../../logs/access.log'), {
  flags: 'a+',
});

// 写入文件
const logs = morgan('combined', {
  stream: writeStream,
});

// 控制台打印
const log = morgan('dev');

module.exports = {
  logs,
  log,
};
