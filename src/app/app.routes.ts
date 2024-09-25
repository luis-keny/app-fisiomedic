import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./feature/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        loadChildren: () => import('./layout/home/home.routes').then(m => m.routesHome)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
