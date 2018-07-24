const Component = require('nanocomponent')
const css = require('sheetify')
const html = require('choo/html')

const LazyImage = require('./lazy-image.js')

const index = css`
  :host {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    line-height: 0;
  }

  @media screen and (max-width: 850px) {
    :host {
      align-items: center;
    }
  }
`

const streamView = css`
  :host {
    text-align: center;
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
`

const zoomed = css`
  :host {
    display: flex;
    cursor: zoom-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
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

const fadeOut = css`
  :host {
    animation: fade-out 0.3s 1 cubic-bezier(0.19, 1, 0.22, 1);
  }
`

const appear = css`
  @keyframes appear {
    0%   { 
      opacity: 0;
      transform: scale(0.85);
    }
    100% {
      opacity: 1;
      transform: scale(1.0);
    }
  }
`

module.exports = class Gallery extends Component {
  constructor (id, state, emit) {
    super(id)
    // this.local = state.components[id] = {}
  }

  load () {
    
  }
  
  update () {
    return true
  }

  open (e, image) {
    this.isOpen = true

    var origin = {
      x: e.clientX / window.innerWidth * 100 + '%',
      y: e.clientY / window.innerHeight * 100 + '%'
    }

    var animation = css`
      :host {
        animation: appear 0.6s 1 cubic-bezier(0.19, 1, 0.22, 1);
      }
    `

    this.lightbox = html`
      <section>
        <div class="${overlay} ${fadeIn}"></div>
        <figure onclick="${() => this.close()}" class="${zoomed}">
          <img class="${animation}" src="${image.src}" style="transform-origin: ${origin.x} ${origin.y}">
        </figure>
      </section>
    `
    document.body.appendChild(this.lightbox)
  }

  close () {
    if (!this.isOpen) return

    this.lightbox.classList.remove(fadeIn)
    this.lightbox.classList.add(fadeOut)

    this.lightbox.addEventListener('webkitAnimationEnd', () => {
      this.onClosed()
    })
    this.lightbox.addEventListener('animationend', () => {
      this.onClosed()
    })
  }

  onClosed () {
    this.lightbox.parentNode.removeChild(this.lightbox)
    this.isOpen = false
  }

  createElement (state) {

    if (state.logView == 'stream') {
      return html`
        <section class="${streamView}">
          ${state.manifest.images.map(image => {
            return state.cache(LazyImage, image.id).render(image, 'stream', this.open.bind(this))
          })}
        </div>
      `
    }
    else if (state.logView == 'index') {
      return html`
        <section class="${index}">
          ${state.manifest.images.map(image => {
            return state.cache(LazyImage, image.id).render(image, 'index', this.open.bind(this))
          })}
        </div>
      `
    }

  }
}