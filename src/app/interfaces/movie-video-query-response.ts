import { MovieVideo } from './movie-video';

export interface MovieVideoQueryResponse {
  id: number;
  results: MovieVideo[];
}
