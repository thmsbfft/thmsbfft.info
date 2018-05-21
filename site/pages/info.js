const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host > p {
    width: 70%;
    max-width: 800px;
    font-size: 115%;
    line-height: 1.2;
    margin-bottom: 3em;
  }
`

module.exports = function (item) {
  return html`
    <section class="${style}">
        <p>
          Email, Twitter, Github, Arena
        </p>
        <p>
          Currently—speculative & visual design for <a href="https://www.google.com/" target="_blank">Android</a>, real-time graphics for Pixel, websites for friends, a product under NDA, and a web browser.
        </p>
    </section>
  `
}