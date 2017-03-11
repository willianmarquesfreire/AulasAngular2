import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMinhaDiretiva]'
})
export class MinhaDiretivaDirective {

  constructor(private el: ElementRef, private render: Renderer) { }

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.changeColor('blue');
  }

  private changeColor(color: string) {
    this.render.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
