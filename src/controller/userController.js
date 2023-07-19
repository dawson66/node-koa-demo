const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

const secret = 'dawson';

const login = async (ctx) => {
    const { name, password } = ctx.request.body;
    console.log(ctx.request.body);

    const res = await User.findOne({ 'name': name }, {name: 1, password: 1, _id: 0});
    if (res) {
        // 用户存在

        //密码是否正确
        if(res.password === password) {
            const payload = {
                data: {
                    name: res.name,
                    password: res.password,
                },
                ept: Math.floor(Date.now() / 1000) + (60 * 60)
            }
    
            const token = jwt.sign(payload, secret);
    
            ctx.cookies.set('dawson', token, { httpOnly: false })
    
            ctx.body = {
                code: 0,
                data: {
                    token
                },
                msg: '登录成功！'
            }
        }else {
            ctx.body = {
                code: 1,
                msg: '密码错误，请重新输入！'
            }
        }

        
    } else {
        ctx.status = 403;
        ctx.body = {
            code: 1,
            msg: '无此用户，请注册！'
        };
    }


    // ctx.body = res;
}

const getUserInfo = async (ctx) => {
    console.log('userinfo');
    ctx.body = {
        code: 0,
        data: {
            name: 'zhangsan',
            age: 28,
            gender: '男'
        }
    }
}

module.exports = {
    login,
    getUserInfo
}