require('babel-polyfill')
var choo = require('choo')
var app = choo()

app.use(function (state, emitter) {
  // load some data
  state.manifest = require('./assets/gallery/manifest.json')
})

app.use(require('./stores/status.js'))

const main = require('./templates/main.js')

app.route('/', main)
app.route('/:page', main)

app.mount('body')