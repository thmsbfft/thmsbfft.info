const socketio = require('socket.io-client')
const io = socketio()

module.exports = function (state, emitter) {
  state.status = 'AFK'

  io.on('status', (data) => {
    console.log(data)
    state.status = data
    emitter.emit('render')
  })
}