require('./reset.js').attach()
const css = require('sheetify')

// background: linear-gradient(to bottom, #D9E9FF 0%, #F7FAFF 25%) fixed;

const body = css`
  :host {
    font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif, "Sans Serif", Icons;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    font-size: 1.1em;
    line-height: 1.4;
    letter-spacing: 0.2px;
  }

  :host a, :host a:visited {
    color: black;
    text-decoration: underline;
    transition: opacity 0.2s;
    letter-spacing: -0.25px;
  }

  :host a:active {
    opacity: 0.5;
  }

  :host h1 {
    font-size: x-large;
  }

  :host p {
    margin-bottom: 0.75em;
    text-indent: 0em;
  }

  :host p strong {
    font-weight: bold;
  }

  :host p em {
    font-style: italic;
  }

  :host ol, :host ul {
    list-style: none;
  }

  :host li {
    margin-bottom: 0.75em;
  }

  :host hr {
    height: 1px;
    border: none;
    background-color: lightgray;
    margin-bottom: 3em;
  }
`

module.exports = body