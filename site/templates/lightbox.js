const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host {
    background: black;
  }

  :host figure {
    width: 100vw;
    height: 100vh;
    display: flex;
    cursor: zoom-out;
  }

  :host img {
    max-height: 100%;
    max-width: 100%;
    margin: auto;
    display: block;
  }
`

module.exports = function (state, emit) {
  // get image from manifest
  let image = state.manifest.images.filter( (img) => {
    return img.id === state.params.image
  })[0]

  emit('DOMTitleChange', 't / ' + image.file)

  return html`
    <body class="${style}">
      <figure onclick="${() => history.go(-1)}">
        <img src="${image.img.src}">
      </figure>
    </body>
  `
}