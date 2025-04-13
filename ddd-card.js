
import { html, css } from "lit";
import { DDDPulseEffectSuper, DDD } from "@haxtheweb/d-d-d/d-d-d.js";

import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {
   
    static get tag() {
        return "ddd-card";
    }

    constructor() {
        super();
        this.dataPrimary="2";
        this.label="";
        this.link="";
        this.image="";
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
          dataPrimary: { type: Number,  reflect: true },
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
            font-family: var(--ddd-font-navigation);
          }
          .wrapper {
            background-color: var(--ddd-theme-default-white);
            border-radius: var(--ddd-radius-sm);
            margin: var(--ddd-spacing-4);
            display: flex;
            flex-direction: column;
            flex: 1 1 300px;
            justify-content: space-between;
            height: 600px;
            max-width: 410px;
            box-shadow: var(--ddd-boxShadow-sm);
          }
          .wrapper img{
            border-top-left-radius: var(--ddd-radius-sm);
            border-top-right-radius: var(--ddd-radius-sm);
            width: 100%;
            height: auto;
            vertical-align: bottom;
            border-bottom: var( --ddd-theme-primary) 15px solid;
          }
          .text{
            flex-grow: 1;
          }
          .title{
            vertical-align: top;
            color: var( --ddd-theme-default-nittanyNavy);
            font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
            margin-top: var(--ddd-spacing-4);
            margin-right: var(--ddd-spacing-4);
            margin-left: var(--ddd-spacing-4);
          }
          .info{
            color: var(--ddd-theme-default-coalyGray);
            font-size: var(--ddd-font-size-3xs);
            font-family: var(--ddd-font-primary);
            line-height: var(--ddd-lh-150);

            margin-top: var(--ddd-spacing--1);
            margin-left: var(--ddd-spacing-4);
            margin-right: var(--ddd-spacing-4);
          }
          .btn{
            width: 90%;
            box-sizing: border-box;
            vertical-align: bottom;
            background-color: var(--ddd-theme-default-link);
            color: var(--ddd-theme-default-white);
            border: var(--ddd-border-xs);
            padding: var(--ddd-spacing-3);

            font-size: var(--ddd-font-size-4xs);
            font-weight: var(--ddd-font-weight-medium);
            font-family: var(--ddd-font-primary);
            
            border-radius: var(--ddd-radius-xs);  

            margin: 0 auto;
            margin-bottom: var(--ddd-spacing-5); 
          }
          .btn:hover{
            color: var(--ddd-theme-default-white);
            background-color: var(--ddd-theme-default-nittanyNavy);
          }
          @media (max-width: 1034px) {
            .wrapper {
              width: auto;
              max-width: 600px;
            }
          }
          @media (max-width: 767.20px) {
            .wrapper {
              max-width: 600px;
              width: auto;
              height: 100%; 
            }
            
        }   
        `];
    }
    render() {
      return html`
        <div class="wrapper">
          <img src="${this.image}" alt="${this.title}"/>
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
    }
      
    _handleClick() {
      if (this.link) {
        window.open(this.link, "_blank");
      }
    }
    
    static get haxProperties() {
      return {
        type: "element",
        canScale: true,
  
        canEditSource: true,
        gizmo: {
          title: "Call to action",
          description: "A simple button with a link to take action.",
          icon: "image:crop-16-9",
          color: "orange",
          tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
          handles: [
            {
              type: "link",
              source: "link",
              title: "label",
            },
          ],
          meta: {
            author: "HAXTheWeb core team",
          },
        },
        settings: {
          configure: [
            {
              property: "label",
              title: "Label",
              description: "Link label",
              inputMethod: "textfield",
              required: true,
            },
            {
              property: "link",
              title: "Link",
              description: "Enter a link to any resource",
              inputMethod: "haxupload",
              noVoiceRecord: true,
              noCamera: true,
              required: true,
            },
            {
              property: "accentColor",
              title: "Accent Color",
              description: "An optional accent color.",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill",
            },
            {
              property: "hideIcon",
              title: "Hide icon",
              description: "Hide the icon used to accent text",
              inputMethod: "boolean",
            },
          ],
          advanced: [
            {
              property: "icon",
              title: "Icon",
              description: "Action link icon",
              inputMethod: "iconpicker",
            },
          ],
        },
        saveOptions: {
          unsetAttributes: ["colors", "element-visible"],
        },
        demoSchema: [
          {
            tag: "simple-cta",
            properties: {
              label: "Click to learn more",
              link: "https://haxtheweb.org/",
            },
            content: "",
          },
        ],
      };
    }

}
globalThis.customElements.define(DddCard.tag, DddCard);