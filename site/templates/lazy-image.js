require('intersection-observer')
const path = require('path')
const html = require('choo/html')
const css = require('sheetify')
const MonoLazy = require('monolazy')

const style = css`
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
      margin: auto;
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
    bottom: 25px;
    text-align: center;
    font-size: 0.75em;
    opacity: 0;
    z-index: 99;

  }

  :host p {
    background-color: rgba(242, 242, 242, .85);
    margin-bottom: 0;
    border-radius: 4px;
    pointer-events: none;
    padding: 12px 6px;
    border-radius: 4px;
    pointer-events: none;
    display: inline-block;
    text-indent: 0;
    max-width: calc(100% - 60px);
    overflow-x: hidden;
    line-height: 1px;
    white-space: nowrap;
  }

  :host p::after {
    content: '';
    background-color: pink;
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

  constructor (id, state, emit) {
    super(`LazyImage-${id}`)
    state = state || {components:{}}
    this.local = state.components[`LazyImage-${id}`] = {}    
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
    return false
  }

  createElement (props, onClick) {
    this.id = props.id
    this.src = path.join('/assets', 'gallery', props.file)
    this.dimensions = props.dimensions
    this.b64 = props.b64
    this.notes = props.notes
    this.onClick = (e) => {
      onClick(e, this)
      return false
    }

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