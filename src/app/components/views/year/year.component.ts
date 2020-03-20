import { Component, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/interfaces/movie-result';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  loading: boolean;
  movies: MovieResult[];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getYearMovies();
  }

  getYearMovies(): void {
    this.loading = true;

    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMoviesByYear(parseInt(params.id)).subscribe(result => {
        this.movies = result.results;
        this.loading = false;
      });
    });
  }
}
