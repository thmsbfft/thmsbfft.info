const reset = require('./reset.js').attach()
const css = require('sheetify')

const body = css`
  :host {
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif", Icons;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    padding: 5vw;
    font-size: 115%;
    line-height: 1.35;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

module.exports = body