const html = require('choo/html')

module.exports = function (nav) {
  if(nav.active) {
    return html`
      <a href="${nav.url}" class="active" title="${nav.name}">${nav.name}</a>
    `
  }
  else {
    return html`
      <a href="${nav.url}" title="${nav.name}">${nav.name}</a>
    `
  }
}