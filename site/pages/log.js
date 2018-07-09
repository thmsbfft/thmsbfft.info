const html = require('choo/html')
const Gallery = require('../templates/gallery.js')

module.exports = function (state, emit) {
  return html`
    <section>
      ${state.cache(Gallery, 'gallery').render(state)}
    </section>
  `
}