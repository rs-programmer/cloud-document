/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 18:06
 * @Description:  测试路由
 */
const Router = require('koa-router');

const jwt = require('jsonwebtoken');
const emit = require('../app/emit');
const { NOT_AUTHORIZATION } = require('../constants/error.type');
const { PUBLIC_KEY } = require('../app/config');

const t1Router = new Router({
  prefix: '/test',
});

t1Router.get('/t1', (ctx) => {
  // 验证是否生效
  // 获取jwt
  const str = ctx.headers.authorization;
  if (!str) {
    return emit(NOT_AUTHORIZATION, ctx);
  }
  const token = str.replace('Bearer ', '');
  // 验证 验证失败直接抛出异常
  ctx.user = jwt.verify(token, PUBLIC_KEY, {
    algorithm: ['RS256'],
  });

  console.log(ctx.request.url);
  console.log(ctx.request.path);
  console.log(ctx.request.href);
  ctx.body = '测试111';
});

module.exports = t1Router;
