require('./reset.js').attach()
require('./fonts.js').attach()
const css = require('sheetify')

// background: linear-gradient(to bottom, #D9E9FF 0%, #F7FAFF 25%) fixed;

const body = css`
  :host {
    font-family: "Neuzeit Book", -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif", Icons;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    font-size: 1.0em;
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
    opacity: 0.5;
  }

  :host p {
    margin-bottom: 1em;
    text-indent: 0em;
  }

  :host p strong {
    font-family: "Neuzeit Book Heavy", -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif", Icons;
  }

  :host p em {
    font-style: italic;
  }

  :host ol, :host ul {
    list-style: none;
  }

  :host li {
    margin-bottom: 1em;
  }

  :host hr {
    height: 1px;
    border: none;
    background-color: lightgray;
    margin-bottom: 3em;
  }
`

module.exports = body