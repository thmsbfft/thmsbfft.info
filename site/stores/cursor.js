module.exports = function (state, emitter) {
  state.cursor = [0, 0]

  emitter.on('DOMContentLoaded', function () {
    emitter.on('ws:open', () => {
      console.log('connection established')
    })
    emitter.on('ws:message', (data, e) => {
      console.log(data)
    })
  })

  emitter.on('cursor:moved', function(e) {
    console.log('>')
    state.cursor[0] = e.x
    state.cursor[1] = e.y
    emitter.emit('render')
  })
}