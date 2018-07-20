const html = require('choo/html')
const raw = require('nanohtml/raw')
const css = require('sheetify')

const Cursor = require('../templates/cursor.js')
const cursor = new Cursor()

const Clock = require('../templates/clock.js')
const clock = new Clock()

const nbsp = '&nbsp;'

const style = css`
  :host {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 2em;
    height: calc(100vh - 4em);
  }

  :host section {

  }

  :host h4 {
    margin-bottom: 1em;
    font-weight: normal;
  }
`

const bottom = css`
  :host {
    align-self: end;
  }

  :host p:last-child {
    margin-bottom: 0;
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
    top: -1px;
    background-color: lightgrey;
  }

  @media screen and (max-width: 850px) {
    :host {
      margin-left: 0;
    }
  }
`

const button = css`
  :host {
    border: 1px solid black;
    border-radius: 6px;
    padding: 1px 2px;
  }

  :host:hover {
    text-decoration: none!important;
  }
`

module.exports = function (state, emit) {

  emit('DOMTitleChange', 't /')

  let color = css`
    :host::after {
      background-color: lightgrey;
      border: 1px solid lightgrey;
    }
  `
  if (state.status === 'Online') {
    color = css`
      :host::after {
        background-color: DarkSeaGreen; 
      }
    `
  }

  return html`
    <section class="${style}">
        <section>
          <p>
            <strong>Thomas</strong> is a designer.
          </p>
          <ul>
            <li>➀ Real-time graphics and visual metaphors for <a href="https://store.google.com/us/product/pixel_2" target="_blank">Pixel</a></li>
            <li>➁ <a href="https://www.google.com/earth/" target="_blank">Google Earth</a>, a geographic information system (GIS) application</li>
            <li>➂ <a href="http://oryoki.io/" target="_blank">Ōryōki</a>, an experimental web browser</li>
            <li>➃ <a href="http://pressanykey.today" target="_blank">pressanykey.today</a></li>
            <li>➄ <a href="https://vimeo.com/100055018" target="_blank">Two Computers</a></li>
          </ul>
          <p>Visit <a href="/log" class="${button}">/log</a> for images. Thank you for visiting. ☯</p>
          <p>
            <a href="mailto:thmsbfft@gmail.com" target="_blank">thmsbfft@gmail.com</a><br/>
          </p>
        </section>
        <section class="${bottom}">
          <span class="${status} ${color}">${state.status}</span>
          <p>
            ${clock.render()}
          </p>
          <p>
            Last updated ${new Date(state.manifest.lastupdated).getMonth() + '/' + new Date(state.manifest.lastupdated).getDate()}
          </p>
        </section>
      ${cursor.render(state.status)}
    </section>
  `
}