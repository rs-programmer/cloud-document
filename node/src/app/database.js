const mysql = require('mysql2/promise');
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = require('./config');

const pool = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

// 监听连接是否成功
pool.on('connection', (connection) => {
  connection.connect((err) => {
    if (err) {
      console.log('数据库连接失败');
    } else {
      console.log('数据库连接成功');
    }
  });
});

module.exports = pool;
