import { Component, OnInit, Input } from '@angular/core';
import { BASICDATA } from './../../../constants/basicData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = BASICDATA.title;
  }

}
