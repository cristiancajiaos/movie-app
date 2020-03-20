import { MovieResult } from './movie-result';

export interface NowPlayingQueryResponse {
  page: number;
  results: MovieResult[];
}
