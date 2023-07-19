const koa = require('koa');

const bodyParser = require('koa-bodyparser');

// config
const { APP_PORT } = require('./src/config/config.default')

// router
const router = require('./src/router/index')

const app = new koa()


app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(APP_PORT, () => {
    console.log('3000端口启动成功');
});
