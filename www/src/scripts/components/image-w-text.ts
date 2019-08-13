import {LitElement, html, css, property, customElement} from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';

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

          <slot name='image'></slot>
          <img
            src='${this.src}'
            alt='${ifDefined(this.alt)}'
            width='${ifDefined(this.width)}'
            height='${ifDefined(this.height)}'>
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
          <a href='${this.href}' title='${ifDefined(this.linkTitle)}' target="${ifDefined(this.target)}">
            ${this.linkTitle}
          </a>
        </div>
      </figure>
    `;
  }



  // static get styles() {
  //   return css`
  //     :host {
  //       display: block;
  //     }
  //     @media (min-width: 768px) {
  //       figure {
  //         columns: 2
  //       }
  //     }
  //   `;
  // }
}
