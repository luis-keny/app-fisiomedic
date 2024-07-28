import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { BreadcrumbService } from '../../core/index.service.triggers';

@Component({
  selector: 'app-cliente-listado',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.css', '/src/app/shared/css/header-views.css']
})
export class ClienteListadoComponent implements AfterViewInit {
  constructor(
    private breadcrumbSrv: BreadcrumbService
  ) { }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.removeAllBread();
  }
}
