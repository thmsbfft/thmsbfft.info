module.exports = function(state, emitter) {
  emitter.on('update-nav', function(newURL) {
    console.log(newURL)
    for (var i = 0; i < state.pages.length; i++) {
      if(state.pages[i].url == newURL) state.pages[i].active = true
      else state.pages[i].active = false
    }
  })
}