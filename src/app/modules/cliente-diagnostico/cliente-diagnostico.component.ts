import { SesionComponent } from './sesion/sesion.component';
import { SeguimientoPagoComponent } from './seguimiento-pago/seguimiento-pago.component';
import { Component } from '@angular/core';
import { Breadcrumb } from '../../core/index.model.system';
import { BreadcrumbService } from '../../core/index.service.triggers';

@Component({
  selector: 'app-cliente-diagnostico',
  standalone: true,
  imports: [SeguimientoPagoComponent, SesionComponent],
  templateUrl: './cliente-diagnostico.component.html',
  styleUrl: './cliente-diagnostico.component.css'
})
export class ClienteDiagnosticoComponent {
  breadcrumb: Breadcrumb[] = [
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
