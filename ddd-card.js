/**
 * Copyright 2025 s0rany
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {
   
    static get tag() {
        return "ddd-card";
    }

    constructor() {
        super();
        this.image="";
        this.dddPrimary="";
        this.title="";
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

    static get properties() {
        return {
          ...super.properties,
          title: { type: String },
          dddPrimary: { type: String },
          image: { type: String },
        };
    }

    static get styles() {
        return [super.styles,
        css`
          :host {
            display: block;
            color: var(--ddd-theme-primary);
            background-color: var(--ddd-theme-accent);
            font-family: var(--ddd-font-navigation);
          }
          .wrapper {
            margin: var(--ddd-spacing-2);
            padding: var(--ddd-spacing-4);
          }
          h3 span {
            font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
          }
        `];
    }
    render() {
      return html`
  <div class="wrapper">
    <div class="img">${this.image}</div>
    
    <h3><span>${this.t.title}:</span> ${this.title}</h3>
    <slot></slot>
  </div>`;
    }
    
    static get haxProperties() {
      return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
        .href;
    }




}
globalThis.customElements.define(DddCard.tag, DddCard);