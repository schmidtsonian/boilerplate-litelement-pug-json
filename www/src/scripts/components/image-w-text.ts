import {LitElement, html, css, property, customElement} from 'lit-element';
import {ifDefined as ifd} from 'lit-html/directives/if-defined';

@customElement('image-w-text')
export class ImageWText extends LitElement {

  @property({type: String}) src = undefined;
  @property({type: String}) alt = undefined;
  @property({type: Number}) width = undefined;
  @property({type: Number}) height = undefined;
  @property({type: String}) caption = undefined;
  @property({type: String}) description = undefined;
  @property({type: String}) href = undefined;
  @property({type: String}) target = undefined;
  @property({type: String}) linkTitle = undefined;

  render() {
    return html`
      <figure>

        <div>
          <slot name='title'></slot>

          <img
            src='${this.src}'
            alt='${ifd(this.alt)}'
            width='${ifd(this.width)}'
            height='${ifd(this.height)}'>
        </div>

        <div>
          <slot name='caption'></slot>
          ${this.caption ?
            html`<figcaption>${this.caption}</figcaption>` : ``
          }

          <slot name='description'></slot>
          ${this.description ?
            html`<p>${this.description}</p>` : ``
          }

          <slot name='link'></slot>
          <a href='${this.href}' title='${ifd(this.linkTitle)}' target="${ifd(this.target)}">
            ${this.linkTitle}
          </a>
        </div>
      </figure>
    `;
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        @media (min-width: 768px) {
          figure {
            columns: 2
          }
        }
      `
    ];
  }
}
