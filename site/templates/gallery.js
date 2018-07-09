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

module.exports = class Gallery extends Nanocomponent {
  constructor () {
    super()
  }

  load () {
    console.log('Gallery height:', this.element.offsetHeight)
    if(this.scrollY) {
      console.log('Restoring scroll to:', this.scrollY)
      window.scrollTo(0, this.scrollY)
      this.scrollY = null
    }
  }
  
  update () {
    if(this.scrollY) {
      console.log('Restoring scroll to:', this.scrollY)
      window.scrollTo(0, this.scrollY)
      this.scrollY = null
    }
    return false
  }

  createElement (state) {
    this.scrollY = state.scrollY
    console.log('Rendering Gallery')
    return html`
      <section class="${style}">
        ${state.manifest.images.map(image => {
          return state.cache(LazyImage, image.id).render(image, state)
        })}
      </div>
    `
  }
}