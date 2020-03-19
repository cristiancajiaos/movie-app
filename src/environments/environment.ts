// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdbBaseUrl: 'https://api.themoviedb.org/3',
  tmdbApiKey: 'ebd8351b7505bd9785d1ea8ffee77e7d',
  tmdbImageBaseUrl: 'https://image.tmdb.org/t/p/',
  tmdbImageSize: 'w500/',
  noPosterUrl: 'http://via.placeholder.com/500x750?text=No+poster',
  noBackdropUrl: 'http://via.placeholder.com/500x750?text=No+backdrop'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
