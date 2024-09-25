import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { verificarObjetoGuard } from '../../core/guard/verificar-objeto.guard';

export const routesHome: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'agenda',
                loadComponent: () => import('../../feature/agenda/agenda.component').then(m => m.AgendaComponent)
            },
            {
                path: 'cliente',
                component: BreadcrumbComponent,
                children: [
                    {
                        path: '',
                        loadComponent: () => import('../../feature/cliente-listado/cliente-listado.component').then(m => m.ClienteListadoComponent)
                    },
                    {
                        path: 'hc',
                        loadComponent: () => import('../../feature/cliente-hc/cliente-hc.component').then(m => m.ClienteHcComponent),
                        canActivate: [verificarObjetoGuard],
                        data: { value: 'idPersona' }
                    },
                    {
                        path: 'hc/diagnostico',
                        loadComponent: () => import('../../feature/cliente-diagnostico/cliente-diagnostico.component').then(m => m.ClienteDiagnosticoComponent)
                    }
                ]
            },
            {
                path: 'reporte',
                loadComponent: () => import('../../feature/reporte/reporte.component').then(m => m.ReporteComponent)
            },
            {
                path: '**',
                redirectTo: 'agenda',
                pathMatch: 'full'
            }
        ]
    }
]