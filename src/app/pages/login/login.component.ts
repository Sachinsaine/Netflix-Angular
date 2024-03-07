declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '576750043606-ued0rm9lqlh2rrveeovlmfgk8bpirv4a.apps.googleusercontent.com',
      callback: (res: any) => this.handleLogin(res),
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
    // return JSON.parse(atob(token));
  }
  handleLogin(res: any) {
    if (res) {
      //decode the token
      const payLoad = this.decodeToken(res.credential);
      //store in session-storage
      sessionStorage.setItem('logged-in', JSON.stringify(payLoad));
      //navigate to homepage
      this.router.navigate(['homepage']);
    }
  }
}
