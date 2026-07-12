import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environment/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { AuthResponse } from '../models/auth-response';
import { GoogleLoginRequest } from '../models/google-login-request';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenStorageService = inject(TokenStorageService);
  private readonly router = inject(Router);

  private readonly authenticated = signal(this.tokenStorageService.isLoggedIn());

  readonly isAuthenticatedSignal = this.authenticated.asReadonly();

  loginWithGoogle(idToken: string): Observable<ApiResponse<AuthResponse>> {
    const request: GoogleLoginRequest = {
      idToken,
    };

    return this.http
      .post<ApiResponse<AuthResponse>>(`${environment.apiUrl}/auth/google`, request)
      .pipe(
        tap((response) => {
          this.tokenStorageService.saveToken(response.data.token);
          this.authenticated.set(true);
        }),
      );
  }

  isAuthenticated(): boolean {
    return this.authenticated();
  }

  logout(): void {
    this.tokenStorageService.clearToken();
    this.authenticated.set(false);
    this.router.navigate(['/login']);
  }

  testProtectedEndpoint() {
    return this.http.get(`${environment.apiUrl}/test`, { responseType: 'text' });
  }

  restoreSession(): Observable<boolean> {
    if (!this.tokenStorageService.isLoggedIn()) {
      return of(false);
    }

    return this.http.get<ApiResponse<UserResponse>>(`${environment.apiUrl}/auth/me`).pipe(
      map(() => {
        this.authenticated.set(true);
        return true;
      }),
      catchError(() => of(false)),
    );
  }
}
