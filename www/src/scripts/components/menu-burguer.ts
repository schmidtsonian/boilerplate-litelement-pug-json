import {LitElement, html, css, property, customElement} from 'lit-element';
import {ifDefined as ifd} from 'lit-html/directives/if-defined';
import resetStyles from './reset-styles';

@customElement('menu-burguer')
export class MenuBurguer extends LitElement {

  @property({type: Boolean}) isOpen = false;

  toggleMenu() {

    this.isOpen = !this.isOpen;

    return this;
  }

  render() {
    return html`

      <button @click=${() => this.toggleMenu()} class='${this.isOpen ? "is-open" : ""}'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class='${this.isOpen ? "is-open" : ""}'>
        <a htef='#' title='title' target='_self'>title</a>
        <a htef='#' title='title' target='_self'>title</a>
        <a htef='#' title='title' target='_self'>title</a>
      </nav>
    `;
  }

  static get styles() {
    return [
      resetStyles,
      css`
        button {
          display: inline-block;
          width: 80px;
          height: 80px;
          position: relative;
          z-index: 1;
        }
        span {
          background-color: red;
          display: block;
          position: absolute;
          margin: auto;
          height: 2px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        nav {
          box-sizing: border-box;
          position: fixed;
          display: none;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          background-color: black;
          padding: 100px;
        }
        a {
          color: white;
          display: block;
        }

        .is-open {
          display: block;

        }
        .is-open span:nth-child(2) {
          display: none;
        }
        .is-open span:first-child {
          transform: rotate(45deg)
        }
        .is-open span:last-child {
          transform: rotate(-45deg)
        }
      `
    ];
  }

  protected createRenderRoot(): Element|ShadowRoot {
    return this.attachShadow({mode: 'open'});
  }
}
