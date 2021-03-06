import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$ = this.authService.user$.pipe(tap(() => (this.isLoading = false)));
  isLoading: boolean;

  constructor(public authService: AuthService) {
    this.isLoading = true;
  }

  login() {
    this.authService.loginProcessing = true;
    this.authService.login().finally(() => {
      this.authService.loginProcessing = false;
    });
  }

  logout() {
    this.authService.loginProcessing = true;
    this.authService.logout().finally(() => {
      this.authService.loginProcessing = false;
    });
  }
}
