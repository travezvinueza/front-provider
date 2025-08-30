import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    
    { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.default) },

    { path: 'pages', loadChildren: () => import('./pages/pages.routes').then(m => m.default) },
];
