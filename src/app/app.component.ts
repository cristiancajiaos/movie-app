import { Component } from '@angular/core';
import { BASICDATA } from './constants/basicData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = BASICDATA.title;
  author = BASICDATA.autor;
}
