module.exports = function (state, emitter) {
  state.cursor = [8, 25]

  emitter.on('tock', function(e) {
    console.log('>')
    state.cursor[0] = e.x
    state.cursor[1] = e.y
    emitter.emit('render')
  })
}