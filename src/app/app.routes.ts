import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/auth/login-component/login-component').then(m => m.LoginComponent)
    }
];
