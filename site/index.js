var choo = require('choo')
var app = choo()

// app.use(require('choo-websocket')())

app.use(function (state, emitter) {
  state.pages = [
    {name: 'Homepage', url: '/', active: false},
    {name: 'Info', url: 'i', active: false}
  ]
})

app.use(require('./stores/clock.js'))
app.use(require('./stores/cursor.js'))
app.use(require('./stores/nav.js'))

var main = require('./templates/main.js')

app.route('/', main)
app.route('/:page', main)

app.mount('body')