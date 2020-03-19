import { Component, OnInit } from '@angular/core';
import { BASICDATA } from './constants/basicData';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = BASICDATA.title;
  author = BASICDATA.autor;
}
