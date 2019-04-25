const http = require('http')
const fs = require('fs')
const url = require('url')
const zlib = require('zlib')
const {
    PORT,
    ROOT,
    UPLOAD_ROOT
} = require('./config')
// console.log(require('./config'))
const { findRouter } = require('./lib/router')
const server = http.createServer((req,res)=>{
    const method = req.method
    const {
        pathname,
        query
    } = url.parse(req.url)
    if(method === "GET") {
        proceeData(method,pathname)
    }
    console.log(url.parse(req.url))
    async function proceeData(method,pathname) {
        const callback = findRouter(method,pathname)
        if(callback) {
            //
        } else {
            //说明请求的是静态资源
            const filepath = ROOT + pathname
            fs.stat(filepath,(error)=>{
                if(error) {
                    res.writeHead("404")
                res.write("Not Found")
                res.end()
                } else {
                    // console.log(filepath)
                    const stream = fs.createReadStream(filepath)
                    const gzip = zlib.createGzip()
                    // console.log(gzip,stream.pipe(gzip))
                    res.setHeader("content-encoding","gzip")
                    stream.pipe(gzip).pipe(res)
                }
            })
        }
    }
})
server.listen(PORT)