import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/movie-result';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private movieService: MovieService,
  ) {}

  ngOnInit() {

  }

}
