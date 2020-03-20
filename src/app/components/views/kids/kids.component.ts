import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/movie-result';

@Component({
  selector: "app-kids",
  templateUrl: "./kids.component.html",
  styleUrls: ["./kids.component.scss"]
})
export class KidsComponent implements OnInit {
  loading: boolean;
  movies: MovieResult[];

  constructor(
    private movieService: MovieService)
  {

  }

  ngOnInit() {
    this.getKidsMovies();
  }

  getKidsMovies(): void {
    this.loading = true;
    this.movies = [];

    this.movieService
      .getKidsMovies()
      .subscribe(result => {
        this.movies = result.results;
        this.loading = false;
      });
  }
}
