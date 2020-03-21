import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/interfaces/movie';
import { environment } from './../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';
import { ProductionCompany } from 'src/app/interfaces/production-company';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
  loading: boolean;
  movie: Movie;
  date: Date;

  videoKey: string;
  videoEmbed: any;

  imdbTitleUrl: string;
  tmdbImageBaseUrl: string;
  tmdbImageSize: string;
  tmdbBackdropSize: string;
  noPosterUrl: string;
  noBackdropUrl: string;
  youtubeUrl: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    public domSanitizer: DomSanitizer,
    private embedService: EmbedVideoService
  ) {
    this.imdbTitleUrl = environment.imdbTitleUrl;
    this.tmdbImageBaseUrl = environment.tmdbImageBaseUrl;
    this.tmdbImageSize = environment.tmdbImageSize;
    this.tmdbBackdropSize = environment.tmdbBackdropSize;
    this.noPosterUrl = environment.noPosterUrl;
    this.noBackdropUrl = environment.noBackdropUrl;
    this.youtubeUrl = environment.youTubeUrl;
  }

  ngOnInit() {
    this.loading = true;

    this.getMovie();
  }

  getMovie(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.id, 10);

      this.movieService.getMovie(id).subscribe(result => {
        this.movie = result;
        this.date = new Date(this.movie.release_date);

        this.loading = false;
      });

      this.movieService.getMovieVideos(id).subscribe(result => {
        console.log(result);

        if (result.results.length > 0) {
          this.videoKey = result.results[0].key;
          this.videoEmbed = this.embedService.embed_youtube(this.videoKey);
        }
      });
    });
  }
}
