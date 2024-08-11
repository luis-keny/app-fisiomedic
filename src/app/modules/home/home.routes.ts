import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { verificarObjetoGuard } from '../../core/guard/verificar-objeto.guard';

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
                path: 'cliente',
                component: BreadcrumbComponent,
                children: [
                    {
                        path: '',
                        loadComponent: () => import('../cliente-listado/cliente-listado.component').then(m => m.ClienteListadoComponent)
                    },
                    {
                        path: 'hc',
                        loadComponent: () => import('../cliente-hc/cliente-hc.component').then(m => m.ClienteHcComponent),
                        canActivate: [verificarObjetoGuard],
                        data: { value: 'idPersona' }
                    },
                    {
                        path: 'hc/diagnostico',
                        loadComponent: () => import('../cliente-diagnostico/cliente-diagnostico.component').then(m => m.ClienteDiagnosticoComponent)
                    }
                ]
            },
            {
                path: 'reporte',
                loadComponent: () => import('../reporte/reporte.component').then(m => m.ReporteComponent)
            },
            {
                path: '**',
                redirectTo: 'agenda',
                pathMatch: 'full'
            }
        ]
    }
]