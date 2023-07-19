const Router = require('koa-router');
const mongoose = require('../db/mongooseDriver')

const userController = require('../controller/userController')

const userRouter = new Router();

// 登录
userRouter.post('/login', userController.login)

userRouter.get('/userinfo', userController.getUserInfo)

module.exports = userRouter
