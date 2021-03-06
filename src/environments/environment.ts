// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdbBaseUrl: 'https://api.themoviedb.org/3',
  tmdbApiKey: 'ebd8351b7505bd9785d1ea8ffee77e7d',
  tmdbImageBaseUrl: 'https://image.tmdb.org/t/p/',
  tmdbImageSize: 'w500/',
  tmdbBackdropSize: 'w780/',
  noPosterUrl: 'http://via.placeholder.com/500x750?text=No+hay+poster+disponible',
  noBackdropUrl: 'http://via.placeholder.com/500x750?text=No+backdrop',
  imdbTitleUrl: 'https://imdb.com/title/',
  youTubeUrl: 'https://www.youtube.com/watch?v=',
  language: 'es-CL',
  region: 'CL'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
