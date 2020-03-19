import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieQueryResponse } from '../interfaces/movie-query-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private url: string;
  private apiKey: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.tmdbBaseUrl;
    this.apiKey = environment.tmdbApiKey;
  }

  getCurrentMovies(): Observable<MovieQueryResponse> {
    return this.http
      .get<MovieQueryResponse>(`${this.url}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc`)
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
