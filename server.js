process.env.NODE_ENV = 'production'

const bankai = require('bankai/http')
const http = require('http')
const path = require('path')

const socketio = require('socket.io')

const compiler = bankai(path.join(__dirname, 'site', 'index.js'), {
  quiet: true,
  watch: false,
  reload: false
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
  console.log('Someone connected')

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