import { Injectable } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';
import { environment } from '../../../environment/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private googleSigninService: GoogleSigninService) {}

  login(element: HTMLElement): void {
    this.googleSigninService.renderLoginButton(
        element,
        credential => {
            console.log("Google ID Token");
            console.log(credential);
        }
    )

  }
}
