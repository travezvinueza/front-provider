import { Routes } from '@angular/router';

export default [

    {
        path: 'dashboard',
        loadComponent: () => import('../pages/dashboard/dashboard').then(m => m.Dashboard),
        title: 'Dashboard'
    }

] as Routes;