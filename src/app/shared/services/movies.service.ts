import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// import axios from 'axios';
import { Observable } from 'rxjs';
const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGExNTM3NGIxMDcyODlhNzZiOGFmNGZhY2FkZmNhZiIsInN1YiI6IjYwYzhkZDQ0Y2E4MzU0MDAyOTk1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R9ZhfiS3W_OueoH1NHoOu1kVT-cuNqHgDewH7ve5MIs',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  popularMoviesUrlPath = 'http://127.0.0.1:2000/videos';
  getMoviesList(): Observable<any> {
    return this.http.get(this.popularMoviesUrlPath);
  }

  tvShowsUrlPath = 'http://127.0.0.1:2000/tvShows';
  searchTvShows(): Observable<any> {
    return this.http.get(this.tvShowsUrlPath);
  }
}
