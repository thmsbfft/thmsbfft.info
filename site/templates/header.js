const html = require('choo/html')

var nav = require('./nav.js')

module.exports = function(state) {
  return html`
    <nav>
      ${state.pages.map(nav)}
    </nav>
  `
}