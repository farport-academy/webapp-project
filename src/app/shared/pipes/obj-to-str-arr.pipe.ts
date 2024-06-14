import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToStrArr'
})
export class ObjToStrArrPipe implements PipeTransform {

  transform(value: object): unknown {
    
    return Object.values(value);
  }

}
