import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { ConfigurationResponse } from '../interfaces/configuration-response';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  private url: string;
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.url = environment.tmdbBaseUrl;
    this.apiKey = environment.tmdbApiKey;
  }

  getConfiguration(): Observable<ConfigurationResponse> {
    return this.http
      .get<ConfigurationResponse>(`${this.url}/configuration?api_key=${this.apiKey}`)
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
