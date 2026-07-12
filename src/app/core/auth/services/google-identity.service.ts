import { Injectable } from '@angular/core';
import { GoogleApi, GoogleCredentialResponse } from '../google.type';
import { environment } from '../../../../environment/environment.development';

declare global {
  interface Window {
    google: GoogleApi;
  }
}

@Injectable({
  providedIn: 'root',
})
export class GoogleIdentityService {
    
  renderLoginButton(element: HTMLElement, callback: (credential: string) => void): void {
    this.initialize(callback);

    window.google.accounts.id.renderButton(element, {
      theme: 'filled_blue',
      size: 'large',
      shape: 'pill',
      width: 300,
    });
  }

  private initialize(callback: (credential: string) => void): void {
    window.google.accounts.id.initialize({
      client_id: environment.googleClientId,

      callback: (response: GoogleCredentialResponse) => {
        callback(response.credential);
      },
    });
  }
}
