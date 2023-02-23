/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 18:06
 * @Description:  用户登录路由器
*/
const jwt = require('jsonwebtoken');
const Router = require('koa-router');
const Result = require('../../app/result');

const { PRIVATE_KEY } = require('../../app/config');

const loginRouter = new Router({
  prefix: '/user',
});

loginRouter.post('/login', (ctx) => {
  console.log(ctx.request.body);
  const token = jwt.sign({
    foo: 'bar',
  }, PRIVATE_KEY, {
    expiresIn: '1h',
    algorithm: 'RS256',
  });
  ctx.body = new Result(200, '登录成功', {
    token,
  });
});

module.exports = loginRouter;
