const path = require('path')
const IMG = require('../templates/lazy-image.js')

module.exports = function (state, emitter) {
  state.manifest = require('../assets/gallery/manifest.json')

  emitter.on('navigate', () => {
    // reset scrollY when navigating home
    if (state.href == '') state.scrollY = null
  })
}