require('babel-polyfill')
var choo = require('choo')
var app = choo()

app.use(function (state, emitter) {
  state.pages = [
    {name: 'Thomas', url: '/', active: false},
    {name: 'Log', url: '/log', active: false}
  ]
})

app.use(require('./stores/images.js'))
app.use(require('./stores/status.js'))
app.use(require('./stores/nav.js'))

const main = require('./templates/main.js')
const lightbox = require('./templates/lightbox.js')

app.route('/', main)
app.route('/:page', main)
app.route('/i/:image', lightbox)

app.mount('body')