module.exports = function (state, emitter) {
  state.logView = 'stream'

  emitter.on('log:view-change', (view) => {
    state.logView = view
    emitter.emit(state.events.RENDER)
  })
}