const socketio = require('socket.io-client')
const io = socketio()

module.exports = function (state, emitter) {
  state.status = 'AFK'

  io.on('message', (data) => {
    if(state.status !== 'Online') {
      state.status = 'Online'
      emitter.emit(state.events.RENDER)
    }
  })

  io.on('status', (data) => {
    console.log(data)
    state.status = data
    emitter.emit(state.events.RENDER)
  })
}