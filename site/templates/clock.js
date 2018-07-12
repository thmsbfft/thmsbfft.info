const Nanocomponent = require('nanocomponent')
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

module.exports = class Clock extends Nanocomponent {

  constructor () {
    super()
    this.time = moment().tz('America/Los_Angeles').format('h:mm z')
    setInterval( () => this.update(), 1000 )
  }

  update () {
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