const http = require('http')
const path = require('path')
const fs = require('fs')

const socketio = require('socket.io')

const server = http.createServer(function (req, res) {
  
  fs.readFile(__dirname + '/dist/index.html', function(err, data) {
    if (err) {
      res.writeHead(500)
      return res.end('Error loading index.html')
    }

    res.writeHead(200)
    res.end(data)
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