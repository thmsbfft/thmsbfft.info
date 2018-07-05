const Nanocomponent = require('nanocomponent')
const html = require('choo/html')
const moment = require('moment-timezone')

module.exports = class Clock extends Nanocomponent {

  constructor () {
    super()
    this.time = moment().tz('America/Los_Angeles').format('h:mm z')
    setInterval( () => this.update(), 1000 )
  }

  update () {
    var now = moment().tz('America/Los_Angeles').format('h:mm z')
    if (now !== this.time) {
      this.time = now
      this.element.innerText = this.time
    }
    return false
  }

  createElement() {
    return html`
      <time>${this.time}</time>
    `
  }

}