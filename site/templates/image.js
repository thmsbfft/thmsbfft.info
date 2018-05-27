const html = require('choo/html')
const css = require('sheetify')

const style = css`
  :host {
    flex-basis: 30%;
    margin: 2em 1em;
    position: relative;
  }

  :host img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 400px;
  }

  :host img {
    border-radius: 4px;
    border: 2px solid transparent;
    transition: border-color 0.05s linear;
  }

  :host img:hover + legend {
    opacity: 1;
  }
`

const legend = css`
  :host {
    position: absolute;
    width: 100%;
    bottom: 15px;
    text-align: center;
    font-size: 0.75em;
    opacity: 0;
  }

  :host p {
    background-color: rgba(245, 245, 245, .9);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    margin-bottom: 0;
    display: inline;
    padding: 5px 10px;
    border-radius: 4px;
    pointer-events: none;
  }

  :host:hover {
    opacity: 1;
  }
`

const placeholder = css`
  :host {

  }

  :host img {
    opacity: 0.1;
  }
`

module.exports = function (image) {
  console.log('Asserting which image to render...')

  // if (!image.loaded) 
  if (!image.loaded) return html`
    <figure class="${style} ${placeholder}">
      <img src="${image.b64}">
    </figure>
  `

  return html`
    <figure class="${style}">
      ${image.html}
      <legend class="${legend}">
        <p>${image.notes}</p>
      </legend>
    </figure>
  `
}