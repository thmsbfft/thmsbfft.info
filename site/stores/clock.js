const moment = require('moment-timezone')

module.exports = function (state, emitter) {
  state.date = moment().tz('America/Los_Angeles').format('h:mm z')
  setInterval(tick, 1000, state, emitter)
}

function tick (state, emitter) {
  var now = moment().tz('America/Los_Angeles').format('h:mm z')
  if (now == state.date) return

  state.date = now
  emitter.emit('render')
}