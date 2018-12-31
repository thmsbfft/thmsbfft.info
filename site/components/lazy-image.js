require('intersection-observer')
const path = require('path')
const html = require('choo/html')
const css = require('sheetify')
const MonoLazy = require('monolazy')

const indexView = css`
  :host {
    margin: 0;
    position: relative;
  }

  :host a {
    cursor: zoom-in;
  }

  :host img {
    display: block;
    height: 200px;
    margin: 2px;
  }

  :host img:hover + legend {
    opacity: 1;
  }

  @keyframes fade-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fade-out {
    0%   { opacity: 1; }
    100% { opacity: 0; }
  }

  @media screen and (max-width: 850px) {
    :host {
      flex-basis: 50%;
    }

    :host img {
      height: auto;
      max-width: calc(100% - 4px);
      max-height: calc(100vh * 0.3);
      margin: 2px auto;
    }
  }
`

const indexLegend = css`
  :host {
    position: absolute;
    width: 100%;
    bottom: 25px;
    text-align: center;
    opacity: 0;
    z-index: 88;
    color: black;
  }

  :host p {
    background-color: rgba(242, 242, 242, .85);
    margin-bottom: 0;
    border-radius: 4px;
    padding: 12px 6px;
    pointer-events: none;
    display: inline-block;
    text-indent: 0;
    max-width: calc(100% - 60px);
    overflow-x: hidden;
    line-height: 1px;
    white-space: nowrap;
  }

  :host a {
    color: black;
  }

  :host:hover {
    opacity: 1;
  }

  @media screen and (max-width: 850px) {
    :host {
      display: none;
    }
  }
`

const streamView = css`
  :host {
    margin-bottom: 15em;
  }

  :host p {
    text-transform: uppercase;
    max-width: 550px;
    margin: auto;
  }

  :host img {
    max-width: 100%;
  }

  :host a {
    cursor: zoom-in;
  }
`

const streamLegend = css`
  :host {
    display: block;
    margin: auto;
    margin-top: 1em;
  }
`

const placeholder = css`
  :host img {
    opacity: 0.1;
  }
`

const fadeIn = css`
  :host {
    animation: fade-in 1s 1 cubic-bezier(0.19, 1, 0.22, 1);
  }
`

// adaptation of: monoimage, @jongacnik
// https://github.com/jongacnik/monoimage/blob/master/index.js

module.exports = class LazyImage extends MonoLazy {

  constructor (id, state, emit) {
    super(`LazyImage-${id}`)
    state = state || {components:{}}
    this.local = state.components[`LazyImage-${id}`] = {}
    this.deviceRatio = (typeof window !== 'undefined' && window.devicePixelRatio > 1) ? 1.75 : 1   
  }

  onEnter () {
    if (this.loaded) return
    
    this.loader = new Image()
    this.loader.onload = () => this.onImageLoad()
    this.loader.src = this.src

    if(this.loader.complete) {
      this.onImageLoad()
    }
  }

  onImageLoad () {
    if(this.loaded) return

    this.loaded = true
    this.rerender()
  }

  update () {
    return true
  }

  createElement (props, view, onClick) {
    this.id = props.id
    this.src = path.join('/assets', 'gallery', props.file)
    this.dimensions = props.dimensions
    this.b64 = props.b64
    this.notes = props.notes
    this.onClick = (e) => {
      onClick(e, this)
      return false
    }

    if (view == 'index') {
      // INDEX
      if(this.loaded) {
        return html`
          <figure class="${indexView}">
            <a onclick="${this.onClick}">
              <img src="${this.src}">
              <legend class="${indexLegend}">
                <p>${this.notes.slug}</p>
              </legend>
            </a>
          </figure>
        `
      }

      return html`
        <figure class="${indexView} ${placeholder}">
          <img src="${this.b64}">
        </figure>
      `
    }
    else if (view == 'stream') {
      // STREAM
      if(this.loaded) {
        return html`
          <figure class="${streamView}">
            <a onclick="${this.onClick}">
              <img src="${this.src}" width="${this.dimensions[0] / this.deviceRatio}">
            </a>
            <legend class="${streamLegend}">
              <p>${this.notes.notes}</p>
            </legend>
          </figure>
        `
      }

      return html`
        <figure class="${streamView} ${placeholder}">
          <img src="${this.b64}">
        </figure>
      `
    }

  }
}