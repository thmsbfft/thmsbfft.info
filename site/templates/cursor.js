const html = require('choo/html')
const css = require('sheetify')

// styles
const cursor = css`
  :host {
    width: 10px;
    height: 10px;
    background: pink;
    position: fixed;
    top: 0;
    left: 0;
  }
`

module.exports = function(state, emit) {
  emit('tock', {x: 8, y: 25})

  var x = state.cursor[0] + '%'
  var y = state.cursor[1] + '%'

  return html`
    <figure class="${cursor}" style="left: ${x}; top: ${y}"></figure>
  `
}