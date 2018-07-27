const socketio = require('socket.io-client')
const io = socketio()

module.exports = function (state, emitter) {
  state.status = 'AFK'
  state.position = [50, 50]

  io.on('connect', (data, done) => {
    console.log('✔')
  })

  io.on('message', (data) => {
    if(state.status !== 'Online') {
      state.status = 'Online'
    }
    state.position[0] = Number(data.x)
    state.position[1] = Number(data.y)
      
    emitter.emit(state.events.RENDER)
  })

  io.on('status', (data) => {
    console.log(data)
    state.status = data
    emitter.emit(state.events.RENDER)
  })
}