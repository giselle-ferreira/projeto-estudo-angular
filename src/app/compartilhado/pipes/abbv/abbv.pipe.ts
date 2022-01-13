import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbv'
})
export class AbbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
