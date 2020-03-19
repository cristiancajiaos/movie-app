import { MovieResult } from './movie-result';

export interface MovieQueryResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieResult[];
}

