const html = require('choo/html')
const css = require('sheetify')
const Component = require('nanocomponent')
const socketio = require('socket.io-client')
const io = socketio()

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
    this.cursor = [50, 50]

    io.on('connect', (data, done) => {
      console.log('✔')
    })

    io.on('message', (data) => {
      this.cursor[0] = Number(data.x)
      this.cursor[1] = Number(data.y)
      window.requestAnimationFrame(() => {this.update()})
    })
  }

  load (el)  {
    el.style.opacity = 0
  }

  update (status) {
    if (!this.element) return false

    if (status === 'AFK') {
      this.element.style.opacity = 0
      return false
    }
    else {
      this.element.style.opacity = 0.5
    }

    this.element.style.left = this.cursor[0] + '%'
    this.element.style.top = this.cursor[1] + '%'

    return false
  }

  createElement() {
    return html`
      <figure class="${cursor}" style="left: ${this.cursor[0] + '%'}; top: ${this.cursor[1] + '%'}"></figure>
    `
  }

}