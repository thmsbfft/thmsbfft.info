var choo = require('choo')
var app = choo()

app.use(function (state, emitter) {
  state.pages = [
    {name: 'thomas buffet', url: '/', active: false},
    {name: 'info', url: 'info', active: false},
    {name: 'log', url: 'log', active: false}
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