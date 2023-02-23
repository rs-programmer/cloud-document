const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const { APP_HOST, APP_PORT, STATE_CODE } = require('./config');

const error = require('./error');
const { logs } = require('./morgan');
const emit = require('./emit');
const { TEMPORARILY_CLOSED } = require('../constants/error.type');
const getRouters = require('../package/router');
const t1Router = require('../test/t1');

const app = new Koa();

// 全局异常捕获
app.on('error', error);

if (STATE_CODE === 'test') {
  // 全局暂停服务
  app.use((ctx) => {
    emit(TEMPORARILY_CLOSED, ctx);
  });
} else {
  app.use(async (ctx, next) => {
    ctx.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Expose-Headers': 'filename',
    });
    await next();
  });

  app.use(logs);
  app.use(koaBody());

  // cookie设置
  app.keys = ['abc123'];

  // 路由注册
  getRouters(app);

  // 测试路由
  app.use(t1Router.routes());
}
module.exports = {
  APP_HOST, APP_PORT, app,
};
