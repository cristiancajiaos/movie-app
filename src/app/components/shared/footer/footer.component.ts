import { Component, OnInit, Input } from '@angular/core';
import { BASICDATA } from './../../../constants/basicData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title: string;
  author: string;

  constructor() { }

  ngOnInit() {
    this.title = BASICDATA.title;
    this.author = BASICDATA.author;
  }

}
