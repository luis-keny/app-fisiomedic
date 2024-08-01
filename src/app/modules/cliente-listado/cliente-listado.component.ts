import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BreadcrumbService } from '../../core/index.service.triggers';
import { CardClienteComponent } from './card-cliente/card-cliente.component';

@Component({
  selector: 'app-cliente-listado',
  standalone: true,
  imports: [RouterLink, CardClienteComponent],
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.css', '../../shared/css/header-views.css']
})
export class ClienteListadoComponent implements AfterViewInit {
  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.removeAllBread();
  }

  public goTo() {
    this.router.navigate(['/home/cliente/hc']);
  }
}
