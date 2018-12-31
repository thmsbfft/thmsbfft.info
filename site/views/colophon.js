const html = require('choo/html')
const css = require('sheetify')

const Cursor = require('../components/cursor.js')
const cursor = new Cursor()

const TITLE = 't / colophon'

const style = css`
  :host {
    padding: 2em;
  }

  :host p {
    max-width: 500px;
  }
`

module.exports = function (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <section class="${style}">
      <p>The source of this website is hosted on <a href="https://github.com/thmsbfft/thmsbfft.info" target="_blank" rel="noopener">→Github</a>, where you can find some notes about how it works and what might be interesting to you.</p>
      <p><a href="/">Back</a></p>
      ${cursor.render(state)}
    </section>
  `
}