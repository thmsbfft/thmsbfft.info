const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const html = require('choo/html')

const LazyImage = require('../templates/lazy-image.js')

const style = css`
  :host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

const overlay = css`
  :host {
    background: black;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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

const fadeIn = css`
  :host {
    animation: fade-in 0.3s 1 cubic-bezier(0.19, 1, 0.22, 1);
  }
`

module.exports = class Gallery extends Nanocomponent {
  constructor () {
    super()
  }

  load () {
    // console.log('Gallery height:', this.element.offsetHeight)
    // if(this.scrollY) {
    //   console.log('Restoring scroll to:', this.scrollY)
    //   window.scrollTo(0, this.scrollY)
    //   this.scrollY = null
    // }
    
  }
  
  update () {
    // if(this.scrollY) {
    //   console.log('Restoring scroll to:', this.scrollY)
    //   window.scrollTo(0, this.scrollY)
    //   this.scrollY = null
    // }
    return false
  }

  open (image) {
    console.log('Opening image', image)
    console.log(this)
    var lightbox = html`
      <div class="${overlay} ${fadeIn}">
        <figure onclick="${() => this.close()}">
          <img src="${image.src}">
        </figure>
      </div>
    `
    document.body.appendChild(lightbox)
  }

  close () {
    console.log('Closing')
  }

  createElement (state) {
    // this.scrollY = state.scrollY
    console.log('Rendering Gallery')
    return html`
      <section class="${style}">
        ${state.manifest.images.map(image => {
          return state.cache(LazyImage, image.id).render(image, this.open.bind(this))
        })}
      </div>
    `
  }
}