const html = require('choo/html')

module.exports = function (nav) {
  if(nav.active) {
    return html`
      <a href="${nav.url}" style="margin-right:50px">${nav.name}</a>
    `
  }
  else {
    return html`
      <a href="${nav.url}" style="margin-right:50px; opacity: 0.5">${nav.name}</a>
    `
  }
}