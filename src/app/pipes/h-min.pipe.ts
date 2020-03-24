import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hMin'
})
export class HMinPipe implements PipeTransform {

  transform(runtime: number): string {
    return `${Math.floor(runtime / 60)}h ${runtime % 60}min`;
  }

}
