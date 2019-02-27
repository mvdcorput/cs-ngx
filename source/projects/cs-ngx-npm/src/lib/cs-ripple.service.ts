import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsRippleService {
  private readonly styleId: string = 'cs-ripple';

  constructor() { }

  initializeCss() {
    if (!this.cssAlreadyInjected()) {
      this.injectCss();
    }
  }

  private cssAlreadyInjected = (): boolean => {
    const head = document.getElementsByTagName('head')[0];
    const headNodes = head.childNodes;
    let csRippleStyleNode: Element = null;

    for (let i = 0; i < headNodes.length; i++) {
      if (headNodes[i].nodeType == 1) {
        const dataOwnerAttribute = (headNodes[i] as Element).attributes['data-owner'];
        if (dataOwnerAttribute && dataOwnerAttribute.value === this.styleId) {
          csRippleStyleNode = headNodes[i] as Element;
        }
      }
    }

    return csRippleStyleNode !== null;
  }

  private injectCss = () => {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement('style');
    const css = 
    `
      /*.ink styles - the elements which will create the ripple effect. The size and position of these elements will be set by the JS code. Initially these elements will be scaled down to 0% and later animated to large fading circles on user click.*/
      .ripple {
        display: block; position: absolute;
        background: rgb(255, 255, 255);
        border-radius: 100%;
        transform: scale(0);
      }
      /*animation effect*/
      .ripple.animate {animation: ripple 0.65s linear;}
      @keyframes ripple {
        /*scale the element to 250% to safely cover the entire link and fade it out*/
        100% {opacity: 0; transform: scale(2.5);}
      }
    `;

    style.setAttribute('data-owner', this.styleId);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    head.appendChild(style);
  }
}
