const html = require('choo/html')

var header = require('./header.js')

module.exports = function (state, emit) {
  var page = state.params.page
  if (state.params.page === undefined) page = '/'

  emit('update-nav', page)
  emit('DOMTitleChange', 't / ' + (page == '/' ? '' : page))

  switch (page) {
    case '/':
      page = require('../pages/home.js')
      break
    case 'i':
      page = require('../pages/info.js')
      break
    default:
      page = require('../pages/404.js')
  }

  return html`
    <main>
      <header>
        ${header(state, emit)}
      </header>
      <section>
        ${page()}
      </section>
    </main>
  `
}