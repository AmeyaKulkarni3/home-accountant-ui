import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/auth/services/auth.service';
import { GoogleIdentityService} from '../../../core/auth/services/google-identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styles: ``,
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('googleButton', { static: true })
  googleButton!: ElementRef<HTMLDivElement>;

  private readonly googleIdentityService = inject(GoogleIdentityService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngAfterViewInit(): void {
    this.googleIdentityService.renderLoginButton(
      this.googleButton.nativeElement,
      (idToken: string) => {
        this.authService.loginWithGoogle(idToken).subscribe({
          next: (response) => {
            console.log('Login Successful');
            console.log(response);
            this.router.navigate(['/dashboard'])
          },
          error: (error) => {
            console.error('Login Failed');
            console.error(error);
          },
        });
      },
    );
  }
}
