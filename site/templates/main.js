const html = require('choo/html')

// styles
const body = require('../style/index.js')

// templates
const header = require('./header.js')
const cursor = require('./cursor.js')

module.exports = function (state, emit) {
  var page = state.params.page
  if (state.params.page === undefined) page = '/'

  emit('update-nav', page)
  
  var title = 't / ' + (page == '/' ? '' : page)
  if (state.title !== title) emit('DOMTitleChange', 't / ' + (page == '/' ? '' : page))

  switch (page) {
    case '/':
      page = require('../pages/home.js')
      break
    case 'info':
      page = require('../pages/info.js')
      break
    case 'log':
      page = require('../pages/log.js')
      break
    default:
      page = require('../pages/404.js')
  }

  return html`
    <body class="${body}">
      ${header(state, emit)}
      ${page()}
      ${cursor(state, emit)}
    </body>
  `
}