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

  @media screen and (max-width: 850px) {
    :host {
      flex-direction: column;
    }
  }
`

const links = css`
  :host > li {
    display: inline-block;
  }

  @media screen and (max-width: 850px) {
    :host {
      flex-basis: 100%;
      order: 2;
    }
  }
`

const right = css`
  @media screen and (max-width: 850px) {
    :host {
      flex-basis: 100%;
      order: 1;
      margin-bottom: 1em;
      background-color: #EDEDED;
      border-radius: 4px;
      text-align: center;
      padding: 3px 10px 2px 10px;
      position: fixed;
      bottom: 10px;
      z-index: 99;
    }
  }
`

const status = css`
  :host {
    margin-right: 2em;
  }

  :host::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
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
      <aside class="${right}">
        <span class="${status} ${color}">${state.status}</span>
        <time>${state.date}</time>
      </aside>
    </header>
  `
}