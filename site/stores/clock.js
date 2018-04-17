const moment = require('moment-timezone')

function pad (n) {
  if (n < 10) return '0' + n
  else return n
}

module.exports = function (state, emitter) {

  emitter.on('tick', function() {
    state.date = moment().tz('America/Los_Angeles').format('h:mm z')
    emitter.emit('render')
  })
}