import { Directive, Input, OnInit } from '@angular/core';
import { EssentiaDirective } from '../core/essentialDirective';

@Directive({
  selector: '[appFormat]'
})
export class FormatDirective extends EssentiaDirective implements OnInit {

  @Input() decimalPlaces : number = 2

  ngOnInit():void{
    const value = this.element.nativeElement.innerText
    if(!isNaN(value)){
      const formattedValue = parseFloat(value).toFixed(this.decimalPlaces)+' '
      this.renderer.setProperty(
        this.element.nativeElement,
        'innerText',
        formattedValue
      )
    }else{
      console.error('il valore inserito non è un numero!')
    }
  }

}
