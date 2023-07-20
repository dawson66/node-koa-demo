const app = require('./app')

// config
const { APP_PORT } = require('./config/config.default')


app.listen(APP_PORT, () => {
    console.log(`${APP_PORT}端口启动成功`);
});
