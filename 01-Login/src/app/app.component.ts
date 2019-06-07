import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-demo';

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    if (window.location.search.includes('code=')) {
      const client = await this.authService.getAuth0Client();
      const result = await client.handleRedirectCallback();

      const targetRoute =
        result.appState && result.appState.target ? result.appState.target : '';

      this.authService.isAuthenticated.next(await client.isAuthenticated());
      this.authService.profile.next(await client.getUser());
      this.router.navigate([targetRoute]);
    }
  }
}
