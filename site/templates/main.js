const html = require('choo/html')

// styles
const body = require('../style/index.js')

module.exports = function (state, emit) {

  let page = state.params.page ? state.params.page : 'home'

  switch (page) {
    case 'home':
      page = require('../pages/home.js')
      break
    case 'log':
      page = require('../pages/log.js')
      break
    default:
      page = require('../pages/404.js')
  }

  return html`
    <body class="${body}">
      ${page(state, emit)}
    </body>`

}