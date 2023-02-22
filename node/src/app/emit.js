/**
 * @author 柠檬小黄鸭
 * @date 2023/2/22 17:25
 * @Description:  抛出全局错误
*/

function emit(type, ctx) {
  ctx.app.emit('error', new Error(type), ctx);
}

module.exports = emit;
