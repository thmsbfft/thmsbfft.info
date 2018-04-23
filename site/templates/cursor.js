const html = require('choo/html')
const css = require('sheetify')

// styles
const cursor = css`
  :host {
    width: 22px;
    height: 22px;
    background: url('/assets/cursor@2x.png');
    background-size: 100%;
    position: fixed;
    transition: all 0.15s linear;
  }
`

module.exports = function(state, emit) {
  // emit('cursor:moved', {x: 8, y: 25})

  var x = state.cursor[0] + '%'
  var y = state.cursor[1] + '%'

  return html`
    <figure class="${cursor}" style="left: ${x}; top: ${y}"></figure>
  `
}