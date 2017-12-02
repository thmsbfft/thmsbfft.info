const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host {
    margin-right: 50px;
  }
`

const active = css`
  :host {
    opacity: 0.5;
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