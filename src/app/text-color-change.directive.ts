import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColorChange]'
})
export class TextColorChangeDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#1071ED';
   }

}