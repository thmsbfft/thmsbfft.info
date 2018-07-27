/* global io */

module.exports = function (state, emitter) {
  state.status = 'Online'

  global.io.on('connect', (data, done) => {
    console.log('✔')
  })

  global.io.on('message', (data) => {
    if(state.status !== 'Online') {
      state.status = 'Online'
      emitter.emit(state.events.RENDER)
    }
  })

  global.io.on('status', (data) => {
    console.log(data)
    state.status = data
    emitter.emit(state.events.RENDER)
  })
}