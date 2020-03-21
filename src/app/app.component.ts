import { Component, OnInit } from '@angular/core';
import { BASICDATA } from './constants/basicData';
import { Location } from '@angular/common';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = BASICDATA.title;
  author = BASICDATA.autor;

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  onSearchQuery(query: string): void {
    console.log('onsearchquery');
    console.log(this.activatedRoute);
    this.router.navigate(['/search', query]);
  }
}
