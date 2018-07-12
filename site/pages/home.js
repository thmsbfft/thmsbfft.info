const html = require('choo/html')
const css = require('sheetify')

const Cursor = require('../templates/cursor.js')
const cursor = new Cursor()

const style = css`
  :host {
    font-family: "Times New Roman", serif;
    font-size: 1.30em;
    line-height: 1.2;
  }
`

module.exports = function (state, emit) {
  return html`
    <section class="${style}">
      <p>
        Currently–speculative & visual design for <a href="https://www.google.com/" target="_blank">Android</a>, real-time graphics for <a href="https://store.google.com/us/product/pixel_2" target="_blank">Pixel</a>, websites for friends, a product under NDA, and a <a href="http://oryoki.io/" target="_blank">web browser</a>. Previously I also worked on relaunching <a href="https://www.google.com/earth/" target="_blank">Google Earth</a>. I work at <a href="http://b-reel.com/" target="_blank">B-Reel</a>, in Los Angeles.
      </p>
      <hr>
      <p>
        Lorem?
      </p>
      <hr>
      <p>
        <a href="mailto:thmsbfft@gmail.com" target="_blank">Email</a>, 
        <a href="https://twitter.com/thmsbfft" target="_blank">Twitter</a>,
        <a href="https://github.com/thmsbfft/" target="_blank">Github</a>,
        <a href="https://www.are.na/thmsbfft/index" target="_blank">Arena</a>
      </p>
      ${cursor.render(state.status)}
    </section>
  `
}