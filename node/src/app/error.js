/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 16:55
 * @Description:  全局错误处理
*/

const {
  NAME_OR_PSW_IS_NULL,
  NAME_ALREADY_EXISTS,
  NAME_NOT_EXISTS,
  PASSWORD_ERROR,
  NOT_LOGIN_IN,
  NOT_AUTHORIZATION,
  NOT_IS_EMPTY,
  INSUFFICIENT_AUTHORIZATION,
  TEMPORARILY_CLOSED,
} = require('../constants/error.type');

const {
  STATUS_400,
  STATUS_409,
  STATUS_401,
  STATUS_999,
} = require('../constants/status.type');

const Result = require('./result');

const caseHandle = (ctx, status, body) => {
  ctx.status = status;
  ctx.body = body;
};

const hand = (error, ctx) => {
  switch (error.message) {
    case NAME_OR_PSW_IS_NULL:
      caseHandle(ctx, STATUS_400, new Result(2000, '用户名或密码未输入', ''));
      break;
    case NAME_ALREADY_EXISTS:
      caseHandle(ctx, STATUS_409, new Result(2000, '用户名已存在', ''));
      break;
    case NAME_NOT_EXISTS:
      caseHandle(ctx, STATUS_400, new Result(2000, '用户名不存在', ''));
      break;
    case PASSWORD_ERROR:
      caseHandle(ctx, STATUS_400, new Result(2000, '密码错误', ''));
      break;
    case NOT_LOGIN_IN:
      caseHandle(ctx, STATUS_401, new Result(2000, '身份认证失效', ''));
      break;
    case NOT_AUTHORIZATION:
      caseHandle(ctx, STATUS_400, new Result(2000, '请求头未携带authorization', ''));
      break;
    case NOT_IS_EMPTY:
      caseHandle(ctx, STATUS_400, new Result(2000, '请求参数不可为空', ''));
      break;
    case INSUFFICIENT_AUTHORIZATION:
      caseHandle(ctx, STATUS_401, new Result(2000, '权限不足', ''));
      break;
    case TEMPORARILY_CLOSED:
      caseHandle(ctx, STATUS_999, new Result(2000, '系统服务维修中', ''));
      break;
    default:
      caseHandle(ctx, 500, new Result(2000, '异常错误', ''));
      console.log(error);
      break;
  }
};

module.exports = hand;
