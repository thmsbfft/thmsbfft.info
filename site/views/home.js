const html = require('choo/html')
const raw = require('nanohtml/raw')
const css = require('sheetify')

const TITLE = 't /'

const Cursor = require('../components/cursor.js')
const cursor = new Cursor()

const Clock = require('../components/clock.js')
const clock = new Clock()

const style = css`
  :host {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 1.5em;
    height: calc(100vh - 3em);
  }

  @media screen and (max-width: 850px) {
    :host ul li {
      margin-left: 20px;
      text-indent: -20px;
      max-width: 80%;
    }
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

module.exports = function (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

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
            <strong>Thomas Buffet</strong> is a designer based in Los Angeles.
          </p>
          <ul>
            <li>➀ <a href="https://google.com/earth/studio" target="_blank" rel="noopener">Google Earth Studio</a>, an animation tool for Google Earth imagery</li>
            <li>➁ Real-time graphics and visual metaphors for Pixel</li>
            <li>➂ <a href="https://anotherday.site/" target="_blank" rel="noopener">Another Day</a>, a writing app</li>
            <li>➃ <a href="http://oryoki.io/" target="_blank" rel="noopener">Ōryōki</a>, an experimental web browser</li>
            <li>➄ <a href="https://www.google.com/earth/" target="_blank" rel="noopener">Google Earth</a>, a geographic information system (GIS) application</li>
            <li>➅ <a href="http://pressanykey.today" target="_blank" rel="noopener">pressanykey.today</a></li>
            <li>➆ <a href="https://vimeo.com/100055018" target="_blank" rel="noopener">Two Computers</a></li>
          </ul>
          <p>Visit <a href="/log">/log</a> for images. Thank you for reading.</p>
          <p>
            <a href="mailto:thmsbfft@gmail.com" target="_blank">thmsbfft@gmail.com</a><br/>
          </p>
          <p>☯</p>
        </section>
        <section class="${bottom}">
          <span class="${status} ${color}">${state.status}</span>
          <p>
            ${clock.render()}
          </p>
          <p>
            Last updated ${new Date(state.manifest.lastupdated).getDate() + '/' + (new Date(state.manifest.lastupdated).getMonth() + 1) + '/' + new Date(state.manifest.lastupdated).getFullYear()} - <a href="/colophon">Colophon</a>
          </p>
        </section>
      ${cursor.render(state)}
    </section>
  `
}