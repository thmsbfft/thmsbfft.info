const html = require('choo/html')
const css = require('sheetify')

const Cursor = require('../templates/cursor.js')
const cursor = new Cursor()

const style = css`
  :host {
    
  }

  :host h4 {
    margin-bottom: 2em;
    margin-top: 2em;
    font-weight: bold;
  }
`

module.exports = function (state, emit) {
  return html`
    <section class="${style}">
      <h4>Ongoing</h4>
      <p>
        Speculative & visual design for <a href="https://www.google.com/" target="_blank">Android</a>, real-time graphics for <a href="https://store.google.com/us/product/pixel_2" target="_blank">Pixel</a>, websites for friends, a product under NDA, and a <a href="http://oryoki.io/" target="_blank">web browser</a>. I work at <a href="http://b-reel.com/" target="_blank">B-Reel</a>, in Los Angeles.
      </p>
      <h4>Before</h4>
      <p>
        Worked on relaunching <a href="https://www.google.com/earth/" target="_blank">Google Earth</a>.
      </p>
      <h4>Links</h4>
      <p>
        <a href="mailto:thmsbfft@gmail.com" target="_blank">thmsbfft@gmail.com</a>, 
        <a href="https://twitter.com/thmsbfft" target="_blank">twitter.com/thmsbfft</a>,
        <a href="https://github.com/thmsbfft/" target="_blank">github.com/thmsbfft/</a>,
        <a href="https://www.are.na/thmsbfft/index" target="_blank">are.na/thomas-buffet/</a>
      </p>
      ${cursor.render(state.status)}
    </section>
  `
}