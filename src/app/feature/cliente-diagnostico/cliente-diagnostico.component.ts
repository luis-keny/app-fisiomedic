import { Component } from '@angular/core';
import { BreadcrumbItem } from '../../core/index.model.system';
import { BreadcrumbService } from '../../core/index.service.triggers';
import { SeguimientoPagoComponent } from './components/seguimiento-pago/seguimiento-pago.component';
import { SesionComponent } from './components/sesion/sesion.component';

@Component({
  selector: 'app-cliente-diagnostico',
  standalone: true,
  imports: [SeguimientoPagoComponent, SesionComponent],
  templateUrl: './cliente-diagnostico.component.html',
  styleUrl: './cliente-diagnostico.component.css'
})
export class ClienteDiagnosticoComponent {
  breadcrumb: BreadcrumbItem[] = [
    { name: 'listado', route: '/home/cliente' },
    { name: 'historial clinico', route: '/home/cliente/hc' },
    { name: 'diagnostico' },
  ];

  constructor(
    private breadcrumbSrv: BreadcrumbService
  ) { }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.defineBreadcrumb(this.breadcrumb, false);
  }
}
