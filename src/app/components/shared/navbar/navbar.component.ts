import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>();
  isCollapsed: boolean;

  searchForm = new FormGroup({
    searchQuery: new FormControl('')
  });

  constructor(
  ) { }

  ngOnInit() {
    this.isCollapsed = true;
  }

  changeCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  sendQuery(): void {
    const query = this.searchForm.value.searchQuery;
    this.searchQuery.emit(query);
  }
}
