import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
    eleRef.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.eleRef.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.eleRef.nativeElement.style.backgroundColor = 'purple';
  }
}
