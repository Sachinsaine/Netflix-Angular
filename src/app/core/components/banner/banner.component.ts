import { Component } from '@angular/core';
import { MoviesService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  movies: any;
  constructor(private movieServer: MoviesService) {
    // this.movies = this.movieServer.handleMovies();
    // console.log(this.movies);
  }
}
