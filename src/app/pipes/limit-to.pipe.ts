import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(obj: any[] | string, limit: number): any {
    return obj.slice(0, limit);
  }

}
