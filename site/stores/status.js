const socketio = require('socket.io-client')
const io = socketio()

module.exports = function (state, emitter) {
  state.status = 'AFK'

  io.on('message', (data) => {
    if(state.status !== 'Online') {
      state.status = 'Online'
      emitter.emit('render')
    }
  })

  io.on('status', (data) => {
    console.log(data)
    state.status = data
    emitter.emit('render')
  })
}