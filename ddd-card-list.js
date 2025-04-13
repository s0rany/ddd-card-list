/**
 * Copyright 2025 s0rany
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.dataPrimary="2";
    this.dataAccent="";
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      dataPrimary: { type: String },
      dataAccent: { type: String },

    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: auto;
        margin-bottom:var(--ddd-spacing-6);
        width: 90%;
        gap: var(--ddd-spacing-6);
        display: grid;
        flex-direction: row;
        flex-wrap: wrap;
        padding: var(--ddd-spacing-4);
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      @media (max-width: 1034px) {
        .wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 767.20px) {
        .wrapper {
          grid-template-columns: 1fr;
        }
      }
   
    `];
  }

  render() {
    return html`
    <div class="wrapper">
      <slot></slot>
    </div>`;
  }

  updated() {
    this.style.setProperty('--ddd-theme-accent', `var(--ddd-accent-${this.dataAccent})`);
    const cards = this.querySelectorAll('ddd-card');
    cards.forEach(card => {
      card.dataPrimary = this.dataPrimary;
    });
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);