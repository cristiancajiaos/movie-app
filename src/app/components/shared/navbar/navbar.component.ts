import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  constructor(
  ) { }

  ngOnInit() {
  }

  sendQuery(): void {
    const query = this.searchForm.value.searchQuery;
    this.searchQuery.emit(query);
  }
}
