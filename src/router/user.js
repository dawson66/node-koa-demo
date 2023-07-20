const Router = require('koa-router');
const mongoose = require('../db/mongooseDriver')

const { login, getUserInfo } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' });

// 登录
router.post('/login', login)

router.get('/userinfo', getUserInfo)

module.exports = router
