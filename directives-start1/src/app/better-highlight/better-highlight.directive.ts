import { HostBinding, HostListener, Input } from '@angular/core';
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input()
  defaultColor:string = 'transparent';
  @Input('appBetterHighlight')
  highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor')
  backgroundColor: string = this.defaultColor;
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {}

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue',false, false);
  }

  @HostListener('mouseover')mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}


