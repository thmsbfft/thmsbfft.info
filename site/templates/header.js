const html = require('choo/html')

var nav = require('./nav.js')

module.exports = function(state) {
  return html`
    <nav>
      ${state.pages.map(nav)}
      <figure class="clock">${state.date}</figure>
    </nav>
  `
}