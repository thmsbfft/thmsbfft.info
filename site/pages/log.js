const html = require('choo/html')
const css = require('sheetify')
const Gallery = require('../templates/gallery.js')

const style = css`
  :host {
    padding: 2em;
  }

  :host menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 3%;
    margin-bottom: 2em;
  }
`

module.exports = function (state, emit) {
  return html`
    <section class="${style}">
      <menu>
        <a href="/">Back</a>
        <a href="">Stream</a>
        <a href="">List</a>
        <p>Last updated ${new Date(state.manifest.lastupdated).getMonth() + '/' + new Date(state.manifest.lastupdated).getDate()}</p>
      </menu>
      ${state.cache(Gallery, 'gallery').render(state)}
    </section>
  `
}