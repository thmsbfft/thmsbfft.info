const path = require('path')
const html = require('choo/html')
const css = require('sheetify')

const LazyImage = require('../components/lazy-image.js')

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

  var src = path.join('/assets', 'gallery', image.file)
  emit(state.events.DOMTITLECHANGE, 't / ' + image.notes.slug)

  console.log(image)

  return html`
    <body class="${style}">
      <figure>  
        ${ state.cache(LazyImage, image.id).render(image, 'stream', null) }
      </figure>
    </body>
  `
}