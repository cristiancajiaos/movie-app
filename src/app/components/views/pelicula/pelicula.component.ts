import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/interfaces/movie';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
  loading: boolean;
  movie: Movie;
  date: Date;

  imdbTitleUrl: string;
  tmdbImageBaseUrl: string;
  tmdbImageSize: string;
  noPosterUrl: string;
  noBackdropUrl: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.imdbTitleUrl = environment.imdbTitleUrl;
    this.tmdbImageBaseUrl = environment.tmdbImageBaseUrl;
    this.tmdbImageSize = environment.tmdbImageSize;
    this.noPosterUrl = environment.noPosterUrl;
    this.noBackdropUrl = environment.noBackdropUrl;
  }

  ngOnInit() {
    this.loading = true;

    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.id, 10);

      this.movieService.getMovie(id).subscribe(result => {
        this.movie = result;
        this.date = new Date(this.movie.release_date);

        this.loading = false;
      });


    });
  }

}
