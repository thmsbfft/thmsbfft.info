const html = require('choo/html')
const css = require('sheetify')

// templates
var nav = require('./nav.js')

// styles
const style = css`
  :host {
    margin-bottom: 5vw;
    text-transform: lowercase;
    display: flex;
    justify-content: space-between;
  }
`

const links = css`
  :host > li {
    display: inline-block;
  }
`

const status = css`
  :host {
    margin-right: 2em;
  }

  :host::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    margin-right: 6px;
    position: relative;
    top: -1px;
    background-color: lightgrey;
    border: 1px solid lightgrey;
  }
`

module.exports = function(state, emit) {
  setTimeout(emit, 1000, 'tick')
  emit('tick')

  return html`
    <header class="${style}">
      <nav class="${links}">${state.pages.map(nav)}</nav>
      <time>
        <span class="${status}">${state.status}</span>
        ${state.date}
      </time>
    </header>
  `
}