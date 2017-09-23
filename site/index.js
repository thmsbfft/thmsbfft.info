var choo = require('choo')
var app = choo()

app.use(function (state, emitter) {
  state.pages = [
    {name: 'homepage', url: '/', active: false},
    {name: 'info', url: 'i', active: false}
  ]
})

app.use(require('./stores/clock.js'))
app.use(require('./stores/nav.js'))

var main = require('./templates/main.js')

app.route('/', main)
app.route('/:page', main)

app.mount('main')