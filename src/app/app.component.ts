import { Component, OnInit } from '@angular/core';
import { BASICDATA } from './constants/basicData';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = BASICDATA.title;
  author = BASICDATA.autor;

  years = ["2019", "2018", "2017", "2016", "2015", "Mejores"];
  categories = ["Populares", "Niños", "En cines"];
}
