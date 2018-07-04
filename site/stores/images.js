const path = require('path')
const IMG = require('../templates/lazy-image.js')

module.exports = function (state, emitter) {
  // create image components from the manifest

  state.manifest = require('../assets/gallery/manifest.json')
  for (var i = state.manifest.images.length - 1; i >= 0; i--) {
    state.manifest.images[i].img = new IMG(state.manifest.images[i])
  }
}