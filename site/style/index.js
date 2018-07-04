const reset = require('./reset.js').attach()
const css = require('sheetify')

const body = css`
  :host {
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif", Icons;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    padding: 2em;
    font-size: 1.30em;
    line-height: 1.4;
    letter-spacing: 0px;
  }

  :host a, :host a:visited {
    color: black;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  :host a:hover {
    text-decoration: underline;
  }

  :host a:active {
    scale: 0.9;
    opacity: 0.5;
  }

  :host p {
    margin-bottom: 3em;
    max-width: 800px;
    text-indent: 2em;
  }

  p strong {
    font-weight: bold;
  }

  p em {
    font-style: italic;
  }

  hr {
    height: 1px;
    border: none;
    background-color: black;
    margin-bottom: 3em;
  }
`

module.exports = body