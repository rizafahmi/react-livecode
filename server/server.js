const http = require('http')
const Gun = require('gun')

const server = http.createServer()
const gun = new Gun({web: server})

server.listen(8080, () => {
  console.log('Gun server started at http://localhost:8080/gun')
})
