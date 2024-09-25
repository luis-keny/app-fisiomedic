import { AfterViewInit, Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';

import { CardPersonaComponent } from './components/card-persona/card-persona.component';
import { CrearDiagnosticoComponent } from './components/crear-diagnostico/crear-diagnostico.component';
import { GrupoDiagnosticoComponent } from './components/grupo-diagnostico/grupo-diagnostico.component';
import { Breadcrumb, Modal } from '../../core/index.model.system';
import { BreadcrumbService, ModalService } from '../../core/index.service.triggers';
import { PersonaHc } from '../../core/index.model.api';
import { getLocalStoragePersona } from '../../core/index.function';
import { PersonaService } from '../../core/index.service.http';

@Component({
  selector: 'app-cliente-hc',
  standalone: true,
  imports: [RouterLink, RouterModule, CardPersonaComponent, GrupoDiagnosticoComponent, CrearDiagnosticoComponent],
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
  getActivateBtnBreadSub: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private personaSrv: PersonaService,
    private modalSrv: ModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.getPersonaAndSetBreadcrumb();
    this.getActivateBtnBreadSub = this.breadcrumbSrv.activateBtn$.subscribe(res => this.inicializarModal());
  }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.defineBreadcrumb(this.breadcrumb, true);
  }

  ngOnDestroy(): void {
    this.getPersonaSub.unsubscribe();
    this.getActivateBtnBreadSub.unsubscribe();
  }

  private inicializarModal() {
    const modalConfig: Modal = {
      title: 'Crear diagnostico',
      component: CrearDiagnosticoComponent,
      alertMessage: '¿Estas seguro que quieres cancelar?',
    }
    this.modalSrv.openModal(this.viewContainerRef, modalConfig);
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
