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
        this.label="";
        this.link="";
        this.image="";
        this.dataPrimary="";
        this.title="";
        this.registerLocalization({
          context: this,
          localesPath:
            new URL("./locales/ddd-card.ar.json", import.meta.url).href +
            "/../",
          locales: ["ar", "es", "hi", "zh"],
        });
    }

    static get properties() {
        return {
          ...super.properties,
          title: { type: String },
          dataPrimary: { type: String },
          image: { type: String },
          label: { type: String },
          link: { type: String },

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
            background-color: var(--ddd-theme-default-beaverBlue);
            width: 410px;
          }
          .text {
            margin: var(--ddd-spacing-2);
            padding: var(--ddd-spacing-4);
          }
          h3 span {
            font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
          }
          .wrapper img{
            width: 100%;
            height: auto;
            display: block;
          }
          
        `];
    }
    render() {
      return html`
        <div class="wrapper">
          <img src="${this.image}" alt="${this.title}" />
          <div class="text">
          <h3>${this.title}</h3>
          <slot></slot>
           </div>
        </div>`;
    }
    
    updated(changedProperties) {
      if (changedProperties.has("dddPrimary")) {
        this.style.setProperty("--ddd-theme-primary", `var(--ddd-primary-${this.dddPrimary})`);
      }
    }
    
    static get haxProperties() {
      return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
        .href;
    }

}
globalThis.customElements.define(DddCard.tag, DddCard);