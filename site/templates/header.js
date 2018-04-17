const html = require('choo/html')
const css = require('sheetify')

// templates
var nav = require('./nav.js')

// styles
const style = css`
  :host {
    margin-bottom: 1em;
  }
`

const clock = css`
  :host {
    float: right;
  }
`

const status = css`
  :host {
    float: right;
    margin-right: 1em;
  }

  :host::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    margin-right: 5px;
    position: relative;
    top: -1px;
    background-color: grey;
  }
`

module.exports = function(state, emit) {
  // setInterval(emit, 1000, 'tick')
  setTimeout(emit, 1000, 'tick')
  emit('tick')
  
  // ${state.status}

  return html`
    <nav class="${style}">
      ${state.pages.map(nav)}
      <figure class="${clock}">${state.date}</figure>
      <figure class="${status}">${state.status}</figure>
    </nav>
  `
}