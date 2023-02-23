/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 18:09
 * @Description:  获取所有路由的方法
*/

const fs = require('fs');

function getRouters(app) {
  const dirs = fs.readdirSync(__dirname);
  dirs.forEach((dir) => {
    // console.log(dir);
    if (dir !== 'router.js') {
      // 导入路由操作
      const router = require(`./${dir}`);
      // 注册
      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  });
}

module.exports = getRouters;
