/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 16:59
 * @Description:  配置文件
*/
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

// keys
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../../public/keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../../public/keys/public.pem'));

const {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  APP_HOST,
  STATE_CODE,
} = process.env;

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY,
  STATE_CODE,
};
