const reset = require('./reset.js').attach()
const css = require('sheetify')

const body = css`
  :host {
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif", Icons;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    padding: 2em;
    font-size: 1.75em;
    line-height: 1.11;
    letter-spacing: -0.5px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  p strong {
    font-weight: bold;
  }

  p em {
    font-style: italic;
  }
`

module.exports = body