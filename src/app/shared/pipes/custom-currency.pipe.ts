import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, numberOfDigits:number = 2): unknown {
    return value.toFixed(numberOfDigits);
  }

}
