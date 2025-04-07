
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
            border-radius: 8px;
            background-color: var(--ddd-theme-default-slate);
            width: 410px;
            box-shadow: 5px 5px 5px 5px lightgrey;
          }
          .text {
            margin: var(--ddd-spacing-2);
            padding: var(--ddd-spacing-2);
            height: 200px;
            overflow: auto;
          }
          h3 span {
            font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
          }
          .wrapper img{
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            width: 100%;
            height: auto;
          }
          .bar{
            bottom: var(--ddd-spacing-0);
            width: 100%;
            height: 16px;
            background-color: var(--ddd-primary-2);
          }
          .info{
            flex-grow: 1; 
            overflow: auto;
          }
          .btn{
            margin-top: auto;             
            color: var(--theme-ui-colors-link);
            font-family: Roboto, Arial, Tahoma, sans-serif;
            cursor: pointer;
            width: -webkit-fit-content;
          }
          .btn:hover{
            color: var(--theme-ui-colors-white);
            background-color: var(--theme-ui-colors-nittanyNavy);
            border: 2px solid #001E44;
          }
          @media screen and (min-width: 1080px) {
            .wrapper {
                margin-top: 3.75rem;
                margin-bottom: 3.75rem;
              }
          }
          @media screen and (min-width: 768px) {
              .wrapper {
                  margin-top: 3.75rem;
                  margin-bottom: 3.75rem;
              }
          }
          
        `];
    }
    render() {
      return html`
        <div class="wrapper">
          <img src="${this.image}" alt="${this.title}"/>
          <div class="bar"></div> 
          <div class="text">
            <h3>${this.title}</h3>
            <div class="info">
              <slot>
              </slot>
            </div>
            <a  class="btn" href="${this.link}">
              Explore
            </a>
          </div>
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
    
    static get haxProperties() {
      return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
        .href;
    }

}
globalThis.customElements.define(DddCard.tag, DddCard);