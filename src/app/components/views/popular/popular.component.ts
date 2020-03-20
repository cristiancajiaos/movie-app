import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/movie-result';

@Component({
  selector: "app-popular",
  templateUrl: "./popular.component.html",
  styleUrls: ["./popular.component.scss"]
})
export class PopularComponent implements OnInit {
  loading: boolean;
  movies: MovieResult[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.loading = true;
    this.movies = [];

    this.movieService
      .getPopularMovies()
      .subscribe(result => {
        this.movies = result.results;
        this.loading = false;
      });
  }
}
