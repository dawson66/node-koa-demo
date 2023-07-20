const Koa = require('koa')

const bodyParser = require('koa-bodyparser');

// router
const router = require('../router')

const app = new Koa();

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;