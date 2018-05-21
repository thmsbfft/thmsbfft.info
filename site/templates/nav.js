const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host {
    margin-right: 50px;
  }

  :host::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    margin-right: 6px;
    position: relative;
    top: 1px;
    background-color: lightgrey;
    transition: background-color 0.2s;
  }
`

const active = css`
  :host::before {
    background-color: black;
  }
`

module.exports = function (nav) {
  if(nav.active) {
    return html`
      <a href="${nav.url}" class="${style} ${active}" title="${nav.name}">${nav.name}</a>
    `
  }
  else {
    return html`
      <a href="${nav.url}" class="${style}" title="${nav.name}">${nav.name}</a>
    `
  }
}