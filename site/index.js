var choo = require('choo')
var app = choo()

app.use(function (state, emitter) {
  state.pages = [
    {name: 'Home', url: '/', active: false},
    {name: 'Info', url: 'info', active: false},
    {name: '2015—2018', url: 'log', active: false}
  ]
})

app.use(require('./stores/clock.js'))
app.use(require('./stores/cursor.js'))
app.use(require('./stores/status.js'))
app.use(require('./stores/nav.js'))

var main = require('./templates/main.js')

app.route('/', main)
app.route('/:page', main)

app.mount('body')