const html = require('choo/html')
const css = require('sheetify')

// styles
const cursor = css`
  :host {
    width: 44px;
    height: 44px;
    background: url('/assets/cursor@2x.png');
    background-size: 100%;
    position: fixed;
    transition: all 0.15s linear;
    opacity: 0.5;
  }
`

module.exports = function(state, emit) {

  var x = state.cursor[0] + '%'
  var y = state.cursor[1] + '%'

  return html`
    <figure class="${cursor}" style="left: ${x}; top: ${y}"></figure>
  `
}