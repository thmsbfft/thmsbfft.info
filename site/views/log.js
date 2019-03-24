const html = require('choo/html')
const css = require('sheetify')
const Gallery = require('../components/gallery.js')

const TITLE = 't / log'

const style = css`
  :host {
    padding: 1.5em;
  }

  :host menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3%;
    margin-bottom: 2em;
  }
`

const right = css`
  :host {
    text-align: right;
  }
`

const nav = css`
  :host {
    text-align: center;
    margin: 2em 0 6em 0;
  }
`

const button = css`
  :host {
    border-radius: 50px;
    padding: 5px 10px 8px 10px;
  }

  :host:hover {
    cursor: pointer;
  }
`

const active = css`
  :host {
    background: lightgrey;
    text-decoration: none!important;
  }
`

module.exports = function (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <section class="${style}">
      <menu>
        <nav>
          <a href="/">Back</a>
        </nav>
        <nav>
          <p class="${right}">Last updated ${new Date(state.manifest.lastupdated).getDate() + '/' + (new Date(state.manifest.lastupdated).getMonth() + 1) + '/' + new Date(state.manifest.lastupdated).getFullYear()}</p>
        </nav>
      </menu>
      <p style="text-align:center">Process + Output</p>
      <nav class="${nav}">
        <a onclick=${onclick} data-view="stream" class="${button} ${state.logView == 'stream' ? active : ''}">stream</a>
        <a onclick=${onclick} data-view="index" class="${button} ${state.logView == 'index' ? active : ''}">index</a>
      </nav>
      ${state.cache(Gallery, 'gallery').render(state)}
    </section>
  `

  function onclick (e) {
    emit('log:view-change', e.target.dataset.view)
    e.preventDefault()
  }
}