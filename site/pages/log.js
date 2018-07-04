const html = require('choo/html')
const css = require('sheetify')

// templates
// const placeholder = require('../templates/placeholder.js')

const style = css`
  :host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
` 

module.exports = function (state, emit) {

  return html`
    <section class="${style}">
      ${state.manifest.images.map(r)}
    </section>
  `
}

function r (image) {
  return image.img.render()
}