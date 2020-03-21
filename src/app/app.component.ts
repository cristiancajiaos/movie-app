import { Component, OnInit } from '@angular/core';
import { BASICDATA } from './constants/basicData';
import { Location } from '@angular/common';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = BASICDATA.title;
  author = BASICDATA.autor;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {

  }

  onSearchQuery(query: string): void {
    if (query.length === 0) {
      // console.log('El campo del buscador no puede estar vacío');
      this.toastr.error('El campo del buscador no puede estar vacío', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      return;
    }

    this.router.navigate(['/search', query]);
  }
}
