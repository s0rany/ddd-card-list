
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class DddCard extends DDDSuper(I18NMixin(LitElement)) {
   
    static get tag() {
        return "ddd-card";
    }

    constructor() {
        super();
        this.label="";
        this.link="";
        this.image="";
        this.dataPrimary="2";
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
          dataAccent: { type: String },
          image: { type: String },
          label: { type: String },
          link: { type: String },
        };
    }

    static get styles() {
        return [super.styles,
        css`
          :host {
            display: inline-block;
            color: var(--ddd-theme-primary);
            background-color: var(--ddd-theme-accent);
            font-family: var(--ddd-font-navigation);
          }
          .wrapper {
            border-radius: var(--ddd-radius-sm);
            margin: var(--ddd-spacing-4);
            background-color: var(--ddd-theme-default-slate);
            width: 410px;
            box-shadow: var(--ddd-boxShadow-sm);
            box-shadow: dimgray;
          }
          .text {
            height: 185px;
          }
          .title{
            font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
            margin-top: var(--ddd-spacing-4);
            margin-bottom: var(--ddd-spacing-0);
            margin-right: var(--ddd-spacing-4);
            margin-left: var(--ddd-spacing-4);
          }
          .wrapper img{
            border-top-left-radius: var(--ddd-radius-sm);
            border-top-right-radius: var(--ddd-radius-sm);
            width: 100%;
            height: auto;
            vertical-align: bottom;
          }
          .bar{
            border-top-width: 12px;
            border-bottom-width: 0px;
            border-color: var(--theme-ui-colors-nittanyNavy);
            border-style: solid;
          }
          .info{
            color: var(--ddd-theme-default-coalyGray);
            font-size: 18px;
            font-family: var(--ddd-font-primary);
            line-height: 27px;
            margin-top: var(--ddd-spacing--1);
            margin-left: var(--ddd-spacing-4);
            margin-right: var(--ddd-spacing-4);
            overflow: auto;
          }
          .btn{
            width: 90%;
            background-color: var(--ddd-theme-default-link);
            color: var(--ddd-theme-default-white);
            border: none;
            padding: var(--ddd-spacing-3);
            font-size: 16px;
            font-weight: var(--ddd-font-weight-medium);
            font-family: var(--ddd-font-primary);
            border-radius: 5px;       
            margin-bottom: var(--ddd-spacing-5);
            margin-right: var(--ddd-spacing-5);
            margin-left: var(--ddd-spacing-5);

            
          }
          .btn:hover{
            color: var(--ddd-theme-default-white);
            background-color: var(--ddd-theme-default-nittanyNavy);
          }
          .slot{
            margin: var(--ddd-spacing-0);
          }
         
          
        `];
    }
    render() {
      return html`
        <div class="wrapper">
          <img src="${this.image}" alt="${this.title}"/>
          <div class="bar" dataAccent="${this.dataAccent}"></div> 
          <div class="text">
            <h3 class="title">${this.title}</h3>
            <div class="info">
              <slot>
              </slot>
            </div>
          </div>
          <button  class="btn" @click=${this._handleClick}>
            Explore >
          </button>
        </div> 
        `;
    }
    
    updated(changedProperties) {
      if (changedProperties.has("dataPrimary")) {
        this.style.setProperty("--ddd-theme-primary", `var(--ddd-primary-${this.dataPrimary})`);
      }
      if (changedProperties.has("dataAccent")) {
        this.style.setProperty("--ddd-theme-accent", `var(--ddd-accent-${this.dataAccent})`);
      }
    }

    _handleClick() {
      if (this.link) {
        window.open(this.link, "_blank");
      }
    }
    
    static get haxProperties() {
      return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
        .href;
    }
//bottom: var(--ddd-spacing-0);
//width: 100%;
//height: 16px;
//background-color: var(--ddd-primary-2);
}
globalThis.customElements.define(DddCard.tag, DddCard);