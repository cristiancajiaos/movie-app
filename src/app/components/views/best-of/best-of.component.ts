import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/movie-result';

@Component({
  selector: 'app-best-of',
  templateUrl: './best-of.component.html',
  styleUrls: ['./best-of.component.scss']
})
export class BestOfComponent implements OnInit {
  loading: boolean;
  movies: MovieResult[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getBestOfMovies();
  }

  getBestOfMovies(): void {
    this.loading = true;

    this.movieService.getBestOfYearsMovies().subscribe(result => {
      this.movies = result.results;
      this.loading = false;
    });
  }

}
