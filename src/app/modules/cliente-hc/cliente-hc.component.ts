import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';

import { CardPersonaComponent } from './card-persona/card-persona.component';
import { GrupoDiagnosticoComponent } from './grupo-diagnostico/grupo-diagnostico.component';
import { Breadcrumb } from '../../core/index.model.system';
import { BreadcrumbService } from '../../core/index.service.triggers';
import { PersonaHc } from '../../core/index.model.api';
import { getLocalStoragePersona } from '../../core/index.function';
import { PersonaService } from '../../core/index.service.http';

@Component({
  selector: 'app-cliente-hc',
  standalone: true,
  imports: [RouterLink, RouterModule, CardPersonaComponent, GrupoDiagnosticoComponent],
  templateUrl: './cliente-hc.component.html',
  styleUrl: './cliente-hc.component.css'
})
export class ClienteHcComponent implements OnInit, AfterViewInit, OnDestroy {
  breadcrumb: Breadcrumb[] = [
    { name: 'listado', route: '/home/cliente' },
    { name: 'historial clinico', route: '/home/cliente/hc' },
  ];
  persona: PersonaHc = {}
  getPersonaSub: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private personaSrv: PersonaService
  ) { }

  ngOnInit(): void {
    this.getPersonaAndSetBreadcrumb();
  }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.defineBreadcrumb(this.breadcrumb, true);
  }

  ngOnDestroy(): void {
    this.getPersonaSub.unsubscribe();
  }

  public getPersonaAndSetBreadcrumb(isUpdate: boolean = false) {
    const value = getLocalStoragePersona();
    if (!value) return;

    if (!isUpdate) this.breadcrumb[1].name = value.nombre + ' ' + value.apellido;

    let id = value.idpersona ?? null;
    if (!id) return;

    this.getPersonaSub = this.personaSrv.getOneById(id).subscribe(p => {
      this.persona = p;
      this.breadcrumb[1].name = p.nombre + ' ' + p.apellido;
    })

  }
}
