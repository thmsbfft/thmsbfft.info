const html = require('choo/html')
const css = require('sheetify')
const Gallery = require('../components/gallery.js')

const TITLE = 't / log'

const style = css`
  :host {
    padding: 2em;
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
    border: 1px solid lightgrey;
    border-radius: 6px;
    padding: 0px 4px 2px 4px;
    cursor: pointer;
    margin: 0 4px;
  }

  :host:hover {
    text-decoration: none!important;
  }
`

const active = css`
  :host {
    border: 1px solid black;
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
          <p class="${right}">Last updated ${new Date(state.manifest.lastupdated).getMonth() + '/' + new Date(state.manifest.lastupdated).getDate()}</p>
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