import { HttpInterceptorFn } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorage = inject(TokenStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = tokenStorage.getToken();

  const isGoogleLoginRequest = req.url.endsWith('/auth/google');

  let request = req;

  if (token && !isGoogleLoginRequest) {

    request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

  }

  return next(request).pipe(

    catchError(error => {

      if (
        error.status === 401 &&
        !isGoogleLoginRequest
      ) {

        authService.logout();

      }

      return throwError(() => error);

    })

  );
};
