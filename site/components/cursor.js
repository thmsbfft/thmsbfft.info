const html = require('choo/html')
const css = require('sheetify')
const Component = require('nanocomponent')

// styles
const cursor = css`
  :host {
    width: 30px;
    height: 44px;
    background: url('/assets/cursor@4x.png');
    background-size: contain;
    position: fixed;
    transition: all 0.05s linear, opacity 1.5s linear;
    opacity: 0.5;
    pointer-events: none;
  }
`

module.exports = class Cursor extends Component {

  constructor (id, state, emit) {
    super(id)
    // this.local = state.components[id] = {}
  }

  load (el)  {
    el.style.opacity = 0
  }

  update (state) {
    if (state.status === 'AFK') {
      this.element.style.opacity = 0
      return false
    }
    else {
      this.element.style.opacity = 0.5
    }

    var x = state.position[0]/100 * window.innerWidth
    var y = state.position[1]/100 * window.innerHeight

    if (x + 30 > window.innerWidth) {
      x = window.innerWidth - 30
    }

    if (y + 44 > window.innerHeight) {
      y = window.innerHeight - 44
    }

    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'

    return false
  }

  createElement() {
    return html`
      <figure class="${cursor}" style="left: 0%; top: 0%"></figure>
    `
  }

}