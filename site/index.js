require('babel-polyfill')
const socketio = require('socket.io-client')
global.io = socketio()

var choo = require('choo')
var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(function (state, emitter) {
  // load some data
  state.manifest = require('./assets/gallery/manifest.json')
})

app.use(require('./stores/status.js'))
app.use(require('./stores/log-view.js'))

const main = require('./views/main.js')

app.route('/', main)
app.route('/:page', main)

app.mount('body')