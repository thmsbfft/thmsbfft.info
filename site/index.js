var choo = require('choo')

var app = choo()

app.use(function (state, emitter) {
  state.date = new Date()
  state.pages = [
    {name: 'homepage', url: '/', active: false},
    {name: 'info', url: 'i', active: false}
  ]

  emitter.on('update-nav', function(newURL) {
    console.log(newURL)
    for (var i = 0; i < state.pages.length; i++) {
      if(state.pages[i].url == newURL) state.pages[i].active = true
      else state.pages[i].active = false
    }
  })
})

var main = require('./templates/main.js')

app.route('/', main)
app.route('/:page', main)

app.mount('body')