import { Component, OnInit, Input } from '@angular/core';
import { MovieResult } from 'src/app/interfaces/movie-result';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-pelicula-result',
  templateUrl: './pelicula-result.component.html',
  styleUrls: ['./pelicula-result.component.scss']
})
export class PeliculaResultComponent implements OnInit {
  @Input() movie: MovieResult;
  date: Date;
  imageUrl: string;
  imageSize: string;
  noPosterUrl: string;

  constructor(
  ) { }

  ngOnInit() {
    this.date = new Date(this.movie.release_date);
    this.imageUrl = environment.tmdbImageBaseUrl;
    this.imageSize = environment.tmdbImageSize;
    this.noPosterUrl = environment.noPosterUrl;
  }

}
