const Component = require('nanocomponent')
const html = require('choo/html')
const css = require('sheetify')
const moment = require('moment-timezone')

const style = css`
  @media screen and (max-width: 850px) {
    :host {
      display: none;
    }
  }
`

module.exports = class Clock extends Component {

  constructor (id, state, emit) {
    super(id)
    // this.local = state.components[id] = {}
    this.time = moment().tz('America/Los_Angeles').format('h:mm z')
    setInterval( () => this.update(), 1000 )
  }

  update () {
    if (!this.element) return false
    var now = moment().tz('America/Los_Angeles').format('h:mm z')
    if (now !== this.time && this.element) {
      this.time = now
      this.element.innerText = this.time
    }
    return false
  }

  createElement() {
    return html`
      <time class="${style}">${this.time}</time>
    `
  }

}