const html = require('choo/html')
const css = require('sheetify')

// templates
const nav = require('./nav.js')
const Clock = require('./clock.js')
const clock = new Clock()

// styles
const style = css`
  :host {
    margin-bottom: 2em;
    padding-bottom: 0em;
    text-transform: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 3%;
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

  :host::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    margin-left: 6px;
    position: relative;
    top: -2px;
    background-color: lightgrey;
    border: 1px solid lightgrey;
  }

  @media screen and (max-width: 850px) {
    :host {
      margin-left: 0;
    }
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
      ${state.pages.map(nav)}
      <nav>
        <span class="${status} ${color}">${state.status}</span>
      </nav>
      ${clock.render()}
    </header>
  `
}