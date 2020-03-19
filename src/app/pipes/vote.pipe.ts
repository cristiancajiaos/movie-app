import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vote'
})
export class VotePipe implements PipeTransform {

  transform(vote: number): any {
    return `${vote.toFixed(1).toString()} / 10`;
  }

}
