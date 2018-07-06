const html = require('choo/html')
const css = require('sheetify')
const Nanocomponent = require('nanocomponent')
const socketio = require('socket.io-client')
const io = socketio()

// styles
const cursor = css`
  :host {
    width: 44px;
    height: 44px;
    background: url('/assets/cursor@2x.png');
    background-size: 100%;
    position: fixed;
    transition: all 0.05s linear;
    opacity: 0.5;
  }
`

module.exports = class Cursor extends Nanocomponent {

  constructor () {
    super()
    this.cursor = [50, 50]

    io.on('connect', (data, done) => {
      console.log('WS OK')
    })

    io.on('message', (data) => {
      console.log('>')
      
      this.cursor[0] = data.x
      this.cursor[1] = data.y
      this.update()
    })
  }

  load (el)  {
    el.style.opacity = 0
  }

  update (status) {
    if (status === 'AFK') {
      this.element.style.opacity = 0
      return false
    }

    this.element.style.opacity = 0.5
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