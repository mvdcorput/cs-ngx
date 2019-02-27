import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';
import { CsRippleService } from './cs-ripple.service';

@Directive({
  selector: '[cs-ripple]'
})
export class CsRippleDirective {

  constructor(private renderer: Renderer2, private elem: ElementRef, private rippleService: CsRippleService) {
    this.rippleService.initializeCss();

    elem.nativeElement.style.position = 'relative';
    elem.nativeElement.style.overflow = 'hidden';
  }

  @HostListener('click', ['$event'])
    onClick(e: any) {
      const elemRenderer = this.renderer;
      const currentElem = this.elem.nativeElement;
      const rippleElem = currentElem.querySelector('.ripple');

      if (rippleElem) {
        elemRenderer.removeChild(currentElem, rippleElem);
      }
  
      // Setup
      const elemPosX = currentElem.getBoundingClientRect().left, elemPosY = currentElem.getBoundingClientRect().top;
      let elemWidth = currentElem.offsetWidth, elemHeight = currentElem.offsetHeight;
  
      currentElem.insertAdjacentHTML('afterbegin', '<span class="ripple"></span>');
  
      // Make it round!
      if (elemWidth >= elemHeight) {
        elemHeight = elemWidth;
      } else {
        elemWidth = elemHeight;
      }
  
      // Get the center of the element
      const x = e.pageX - elemPosX - elemWidth / 2;
      const y = e.pageY - elemPosY - elemHeight / 2;
  
      elemRenderer.setStyle(currentElem.querySelector('.ripple'), 'width', elemWidth + 'px');
      elemRenderer.setStyle(currentElem.querySelector('.ripple'), 'height', elemHeight + 'px');
      elemRenderer.setStyle(currentElem.querySelector('.ripple'),'top', y + 'px');
      elemRenderer.setStyle(currentElem.querySelector('.ripple'), 'left', x + 'px');

      elemRenderer.addClass(currentElem.querySelector('.ripple'), 'animate');
    }
}
