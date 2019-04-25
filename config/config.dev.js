const path = require('path')
module.exports = {
    // 配置数据库参数
    DB_HOST: "127.0.0.1",
    DB_PORT:3306,
    DB_USER: "root",
    DB_PASS: "123456",
    DB_NAMW: "bendi",
    // 服务端口号
    PORT: 3005,
    // 静态资源路径
    ROOT: path.resolve(__dirname,"../static"),
    UPLOAD_ROOT: path.resolve(__dirname,"../upload")
}