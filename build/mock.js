const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const { port } = require('../config')

const server = http.createServer((req, res) => {
  const mockPath = path.join(__dirname, url.parse(req.url).pathname + '.json')
  if (fs.existsSync(mockPath)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    })
    setTimeout(() => {
      fs.createReadStream(mockPath, {
        autoClose: true
      }).pipe(res)
    }, 1000)
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    res.write('没有配置mock数据')
    res.end()
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`)
})
