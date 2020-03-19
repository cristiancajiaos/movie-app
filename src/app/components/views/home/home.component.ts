import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/movie-result';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: 'Movie App';

  loading: boolean;
  movies: MovieResult[];

  years = ['2019', '2018', '2017', '2016', '2015', 'Mejores'];
  categories = ['Populares', 'Niños', 'En cines'];

  currentYear: string;
  currentCategory: string;

  constructor(
    private movieService: MovieService,
  ) {

  }

  ngOnInit() {
    this.currentYear = this.years[0];
    this.currentCategory = this.categories[0];

    this.getPopularMovies();
  }

  selectYear(year: string): void {
    this.currentYear = year;
  }

  selectCategory(category: string): void {
    this.currentCategory = category;

    switch (category) {
      case 'Populares': {
        this.getPopularMovies();
      }

      case 'Niños': {
        this.getKidsMovies();
      }

      default: {

      }
    }
  }

  getPopularMovies(): void {
    this.loading = true;
    this.movies = [];

    this.movieService.getCurrentMovies().subscribe(result => {
      this.movies = result.results;
      this.loading = false;
    });
  }

  getKidsMovies(): void {
    this.loading = true;
    this.movies = [];

    this.movieService.getKidsMovies().subscribe(result => {
      this.movies = result.results;
      this.loading = false;
    });
  }
}
