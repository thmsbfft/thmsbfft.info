// https://github.com/wcastand/mobile-time/blob/master/server.js
// https://github.com/BenjaminVerble/choo-http/blob/master/server.js
// https://github.com/plaey/chatbot/blob/master/server.js

const bankai = require('bankai/http')
const http = require('http')
const path = require('path')

const socketio = require('socket.io')

const compiler = bankai(path.join(__dirname, 'site', 'index.js'), {
  quiet: false,
  watch: true
})

const server = http.createServer(function (req, res) {
  compiler(req, res, function () {
    res.statusCode = 404
    res.end('not found')
  })
}).listen(8080, () => {
  console.log('Listening on port 8080')
})

const io = socketio(server)

io.on('connect', (socket) => {
  console.log('WS: NEW')

  socket.on('message', (data) => {
    if(data.x && data.y) {
      socket.broadcast.emit('message', {x: parseFloat(data.x), y: parseFloat(data.y)})
    }
  })

  socket.on('status', (data) => {
    console.log(data)
    if (data) {
      socket.broadcast.emit('status', String(data))
    }
  })
})