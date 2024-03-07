import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) userImg: string = '';
  navbarList = [
    'Home',
    'TV Shown',
    'News & Popular',
    'My List',
    'Browse By Language',
  ];
}
