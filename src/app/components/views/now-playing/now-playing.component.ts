import { Component, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/interfaces/movie-result';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  loading: boolean;
  movies: MovieResult[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getNowPlayingMovies();
  }

  getNowPlayingMovies(): void {
    this.loading = true;
    this.movies = [];

    this.movieService.getNowPlayingMovies().subscribe(result => {
      this.movies = result.results;
      this.loading = false;
    });
  }

}
