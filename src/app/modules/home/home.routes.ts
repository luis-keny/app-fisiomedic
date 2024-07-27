import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routesHome: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'agenda',
                loadComponent: () => import('../agenda/agenda.component').then(m => m.AgendaComponent)
            },
            {
                path: '**',
                redirectTo: 'agenda',
                pathMatch: 'full'
            }
        ]
    }
]