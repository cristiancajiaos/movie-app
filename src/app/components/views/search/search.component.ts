import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/movie-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  loading: boolean;
  movies: MovieResult[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.movies = [];

    this.activatedRoute.params.subscribe(params => {
      this.query = params.query;

      this.movieService.searchMovies(this.query).subscribe(result => {
        this.movies = result.results;
        this.loading = false;
      });
    });
  }

}
