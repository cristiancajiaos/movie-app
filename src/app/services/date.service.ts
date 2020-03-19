import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date: Date;

  constructor() {
    this.date = new Date();
  }

  getCurrentDateFormatYYYYMMDD(): string {
    function twoDigitsString(n: number): string {
      return (n < 10) ? `0${n}` : `${n}`;
    }

    return `${this.date.getFullYear()}-${twoDigitsString(this.date.getMonth() + 1)}-${twoDigitsString(this.date.getUTCDate())}`;
  }
}
