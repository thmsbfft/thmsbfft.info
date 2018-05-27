const path = require('path')
const load = require('load-asset')

module.exports = function (state, emitter) {

  state.manifest = require('../assets/gallery/manifest.json')
  start(state, emitter)
  
}

async function start (state, emitter) {
    
  console.log('Loading images...')
  for (var i = 0; i < state.manifest.images.length; i++) {
    console.log('Loading image ' + i)
    state.manifest.images[i].html = await load(path.join('assets', 'gallery', state.manifest.images[i].file))
    state.manifest.images[i].loaded = true
    console.log('Loaded, rendering...')
    emitter.emit('render')
  }

  console.log('All done.')
}