const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host, :host:active, :host:visited {
    margin-right: 50px;
    padding-bottom: 2px;
  }

  :host:hover {
    text-decoration: none!important;
  }
`

const active = css`
  :host {
    opacity: 1;
    border-bottom: 1px dashed white;
  }
`

module.exports = function (nav) {
  if(nav.active) {
    return html`
      <nav><a href="/${nav.url}" class="${style} ${active}" title="${nav.name}">${nav.name}</a></nav>
    `
  }
  else {
    return html`
      <nav><a href="/${nav.url}" class="${style}" title="${nav.name}">${nav.name}</a></nav>
    `
  }
}