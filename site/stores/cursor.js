const socketio = require('socket.io-client')
const io = socketio()

module.exports = function (state, emitter) {
  state.cursor = [0, 0]

  io.on('connect', (data, done) => {
    console.log('WS: ✔')
  })

  io.on('message', (data) => {
    console.log('>')
    
    state.cursor[0] = data.x
    state.cursor[1] = data.y

    emitter.emit('render')
  })
}