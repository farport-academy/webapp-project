import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, prefix?:string ): unknown {
   
    const output = value.split('').reverse().join('');
    return prefix ? `<-${prefix} ${output}` : output
    
  }

}
