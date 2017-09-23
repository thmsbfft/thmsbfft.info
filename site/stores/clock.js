function pad (n) {
  if (n < 10) return '0' + n
  else return n
}

module.exports = function (state, emitter) {
  emitter.on('tick', function() {
    state.date = pad(new Date().getHours()) + ':' + pad(new Date().getMinutes()) + ':' + pad(new Date().getSeconds())
    emitter.emit('render')
  })
}