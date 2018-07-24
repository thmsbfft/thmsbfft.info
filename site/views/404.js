const html = require('choo/html')
const css = require('sheetify')

const TITLE = 't / 404'

const style = css`
  :host {
    padding: 2em;
  }
`

module.exports = function (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <section class="${style}">
      <p>404</p>
      <p><a href="/">bye</a></p>
    </section>
  `
}