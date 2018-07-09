const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const html = require('choo/html')

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
    if(this.scrollY) {
      console.log('Restoring scroll to:', this.scrollY)
      window.scrollTo(0, this.scrollY)
    }
  }

  update () {
    if(this.scrollY) {
      console.log('Restoring scroll to:', this.scrollY)
      window.scrollTo(0, this.scrollY)
    }
    return true
  }

  createElement(images, scrollY) {
    this.scrollY = scrollY
    this.images = images
    return html`
      <section class="${style}">
        ${this.images.map(this.renderImages)}
      </div>
    `
  }

  renderImages(image) {
    return image.img.render()
  }
}