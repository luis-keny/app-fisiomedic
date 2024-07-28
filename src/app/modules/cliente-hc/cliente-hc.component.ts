import { AfterViewInit, Component } from '@angular/core';
import { Breadcrumb } from '../../core/index.model.system';
import { BreadcrumbService } from '../../core/index.service.triggers';
import { RouterLink, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-hc',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './cliente-hc.component.html',
  styleUrl: './cliente-hc.component.css'
})
export class ClienteHcComponent implements AfterViewInit {
  breadcrumb: Breadcrumb[] = [
    { name: 'listado', route: '/home/cliente' },
    { name: 'historial clinico', route: '/home/cliente/hc' },
  ];
  breadcrumbSub: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService
  ) { }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.defineBreadcrumb(this.breadcrumb, true);
  }
}
