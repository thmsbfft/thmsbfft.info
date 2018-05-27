const html = require('choo/html')
const css = require('sheetify')

// templates
var nav = require('./nav.js')

// styles
const style = css`
  :host {
    margin-bottom: 4em;
    text-transform: none;
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
    border-radius: 8px;
    margin-right: 6px;
    position: relative;
    top: -2px;
    background-color: lightgrey;
    border: 1px solid lightgrey;
  }
`

module.exports = function(state, emit) {
  let color = css`
    :host::before {
      background-color: lightgrey;
      border: 1px solid lightgrey;
    }
  `
  if (state.status === 'Online') {
    color = css`
      :host::before {
        background-color: DarkSeaGreen;
        border: 1px solid DarkSeaGreen;  
      }
    `
  }

  return html`
    <header class="${style}">
      <nav class="${links}">${state.pages.map(nav)}</nav>
      <time>
        <span class="${status} ${color}">${state.status}</span>
        ${state.date}
      </time>
    </header>
  `
}