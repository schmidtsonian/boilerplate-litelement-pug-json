
import {LitElement, html, css, property, customElement} from 'lit-element';

import resetStyles from '../reset-styles';
import menuBurguer from './menu-burguer.scss';

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
        <a htef='#' title='title'>title</a>
        <a htef='#' title='title'>title</a>
        <a htef='#' title='title'>title</a>
      </nav>
    `;
  }

  static get styles() {
    return [
      resetStyles,
      menuBurguer
    ];
  }

  protected createRenderRoot(): Element|ShadowRoot {
    return this.attachShadow({mode: 'open'});
  }
}
