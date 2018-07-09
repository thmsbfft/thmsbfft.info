require('intersection-observer')
const path = require('path')
const html = require('choo/html')
const css = require('sheetify')
const MonoLazy = require('monolazy')

const style = css`
  :host {
    flex-basis: 30%;
    margin: 2em 1em;
    position: relative;
  }

  :host a {
    cursor: zoom-in;
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

  @keyframes fade-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  @media screen and (max-width: 1280px) {
    :host {
      flex-basis: 45%;
    }
  }

  @media screen and (max-width: 850px) {
    :host {
      flex-basis: 100%;
      margin: 1em 0.5em;
    }

    :host img {
      max-height: 600px;
    }
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

  @media screen and (max-width: 850px) {
    :host {
      display: none;
    }
  }
`

// adaptation of: monoimage, @jongacnik
// https://github.com/jongacnik/monoimage/blob/master/index.js

module.exports = class LazyImage extends MonoLazy {

  constructor(props, onClick) {
    super()
    this.id = props.id
    this.src = path.join('/assets', 'gallery', props.file)
    this.dimensions = props.dimensions
    this.b64 = props.b64
    this.notes = props.notes
    this.onClick = onClick
  }

  onEnter() {
    if (this.loaded) return
    
    this.loader = new Image()
    this.loader.onload = () => this.onImageLoad()
    this.loader.src = this.src

    if(this.loader.complete) {
      this.onImageLoad()
    }
  }

  onImageLoad() {
    if(this.loaded) return

    this.loaded = true
    this.rerender()
  }

  update() {
    return true
  }

  createElement(param) {
    if(this.loaded) {
      return html`
        <figure class="${style}">
          <a href="/i/${this.id}" onclick="${this.onClick}">
            <img src="${this.src}">
            <legend class="${legend}">
              <p>${this.notes}</p>
            </legend>
          </a>
        </figure>
      `
    }

    return html`
      <figure class="${style} ${placeholder}">
        <img src="${this.b64}">
      </figure>
    `
  }
}