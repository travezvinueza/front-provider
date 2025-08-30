import { Routes } from "@angular/router";

export default [

    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login),
        title: 'Login'
    }

] as Routes;