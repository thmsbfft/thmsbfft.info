const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host {
    padding: 2em;
  }
`

module.exports = function (state, emit) {

  emit('DOMTitleChange', 't / 404')

  return html`
    <section class="${style}">
      <p>404</p>
      <p><a href="/">bye</a></p>
    </section>
  `
}