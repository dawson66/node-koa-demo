const mongoose = require('mongoose')
const mongoUrl = 'mongodb://127.0.0.1:27017/vue-admin';
const dbName = "vue-admin"

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', function (error) {
    console.log('连接数据库失败', error);
})

mongoose.connection.on('open', function () {
    console.log('数据库连接成功');
})

module.exports = mongoose