const reset = require('./reset.js').attach()
const css = require('sheetify')

const body = css`
  :host {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }
`

module.exports = body