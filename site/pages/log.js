const html = require('choo/html')
const Gallery = require('../templates/gallery.js')
const gallery = new Gallery()

module.exports = function (state, emit) {
  return html`
    <section>
      ${gallery.render(state.manifest.images, state.scrollY)}
    </section>
  `
}