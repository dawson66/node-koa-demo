const http = require('http');
const fs = require('fs');
const querystring = require('querystring')
const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    const filePath = './public/static/main.js';

    // server:last-modified  client:if-modified-since
    if (url === '/test/main') {
      const ifModifiedSince = req.headers['if-modified-since'];
      // 查询文件状态
      fs.stat(filePath, (err, stats) => {
        if (err) {
            res.end(new Error('can not find this file!'))
            return
        }
        const modifiedTime = stats.mtime.toGMTString();
        // 资源未过期
        if(ifModifiedSince === modifiedTime){
          res.writeHead(304, 'Node Modified')
          res.end();
        }else{
          // 资源已过期
          fs.readFile(filePath, (err, data) => {
            if (err) {
                return
            }
            res.writeHead(200, {
                'content-type': 'text/javascript',
                'cache-control':'public,max-age=3',
                'last-modified': modifiedTime
            })
            res.end(data);
          })
        }
      })
    }
  })

server.listen(PORT, () => {
    console.log('server running in 3000');
})

// const http = require('http');
// const fs = require('fs');
// const querystring = require('querystring')
// const PORT = 3000;

// const server = http.createServer((req, res) => {

//     const url = req.url;

//   	// main.js文件路径
//     const filePath = './public/static/main.js';

//     if (url === '/test/main') {
//         // 查询文件状态
//         fs.stat(filePath, (err, stats) => {
//           if (err) {
//             res.end(new Error('can not find this file!'))
//               return
//           }
            
//           fs.readFile(filePath, (err, data) => {
//             if (err) {
//               return
//             }
//             // 设置Cache-Control 为5秒
//             res.writeHead(200, {
//               'content-type': 'text/html',
//               'cache-control':'max-age=5',
//             })
//             res.end(data);
//           })
//         })
//     }
// })

// server.listen(PORT, () => {
//     console.log('server running in 3000');
// })