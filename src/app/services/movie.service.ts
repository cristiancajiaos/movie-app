import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieQueryResponse } from '../interfaces/movie-query-response';
import { environment } from 'src/environments/environment';
import { NowPlayingQueryResponse } from '../interfaces/now-playing-query-response';
import { Movie } from '../interfaces/movie';
import { MovieVideoQueryResponse } from '../interfaces/movie-video-query-response';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private url: string;
  private apiKey: string;
  private language: string;

  constructor(private http: HttpClient) {
    this.url = environment.tmdbBaseUrl;
    this.apiKey = environment.tmdbApiKey;
    this.language = environment.language;
  }

  getPopularMovies(): Observable<MovieQueryResponse> {
    return this.http
      .get<MovieQueryResponse>(
        `${this.url}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&language=${this.language}`
      )
      .pipe(catchError(this._handleError));
  }

  getKidsMovies(
  ): Observable<MovieQueryResponse> {
    return this.http
      .get<MovieQueryResponse>(
        `${this.url}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&certification_country=US&certification.lte=PG&certification.gte=G&language=${this.language}`
      )
      .pipe(catchError(this._handleError));
  }

  getNowPlayingMovies(): Observable<NowPlayingQueryResponse> {
    return this.http
      .get<NowPlayingQueryResponse>(`${this.url}/movie/now_playing?api_key=${this.apiKey}&language=${this.language}`)
      .pipe(catchError(this._handleError));
  }

  getMoviesByYear(year: number): Observable<MovieQueryResponse> {
    return this.http
      .get<MovieQueryResponse>(
        `${this.url}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&language=${this.language}&primary_release_year=${year}`
      )
      .pipe(catchError(this._handleError));
  }

  getBestOfYearsMovies(): Observable<MovieQueryResponse> {
    return this.http.get<MovieQueryResponse>(`${this.url}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&release_date.gte=2015-01-01&release_date.lte=2019-12-31`)
      .pipe(catchError(this._handleError));
  }

  searchMovies(query: string): Observable<MovieQueryResponse> {
    query = query.replace(/\s/, '%20');
    return this.http
      .get<MovieQueryResponse>(`${this.url}/search/movie?api_key=${this.apiKey}&query=${query}&language=${this.language}`)
      .pipe(catchError(this._handleError));
  }

  getMovie(id: number): Observable<Movie> {
    return this.http
      .get<Movie>(`${this.url}/movie/${id}?api_key=${this.apiKey}&language=${this.language}`)
      .pipe(catchError(this._handleError));
  }

  getMovieVideos(id: number): Observable<MovieVideoQueryResponse> {
    return this.http
      .get<MovieVideoQueryResponse>(`${this.url}/movie/${id}/videos?api_key=${this.apiKey}&language=${this.language}`)
      .pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
