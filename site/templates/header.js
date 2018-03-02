const html = require('choo/html')
const css = require('sheetify')

// templates
var nav = require('./nav.js')

// styles
const clock = css`
  :host {
    float: right;
  }
`

module.exports = function(state, emit) {
  // setInterval(emit, 1000, 'tick')
  setTimeout(emit, 1000, 'tick')
  emit('tick')
  
  return html`
    <nav>
      ${state.pages.map(nav)}
      <figure class="${clock}">${state.date}</figure>
    </nav>
  `
}