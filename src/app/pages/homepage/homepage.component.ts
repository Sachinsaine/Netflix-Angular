import { Component, OnInit, inject } from '@angular/core';
import { NetflixService } from '../../shared/services/netflix.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  auth = inject(NetflixService);
  name = JSON.parse(sessionStorage.getItem('logged-in')!).name;
  userProfile = JSON.parse(sessionStorage.getItem('logged-in')!).picture;
  userEmail = JSON.parse(sessionStorage.getItem('logged-in')!).email;
  movies = inject(MoviesService);
  ngOnInit(): void {}
  popularMovies: any[] = [];
  handleSignOut() {
    this.auth.signOut();
    sessionStorage.removeItem('logged-in');
  }
}
