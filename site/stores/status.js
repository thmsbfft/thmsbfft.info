/* global io */

module.exports = function (state, emitter) {
  state.status = 'Online'

  io.on('connect', (data, done) => {
    console.log('✔')
  })

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