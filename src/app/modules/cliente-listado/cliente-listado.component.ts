import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { CardClienteComponent } from './card-cliente/card-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { BreadcrumbService, ModalService, NotifyService } from '../../core/index.service.triggers';
import { FiltrarPersonaPipe } from '../../core/index.pipe.main';
import { PersonaService } from '../../core/index.service.http';
import { Persona } from '../../core/index.model.api';
import { Modal } from '../../core/index.model.system';
import { setLocalStorage } from '../../core/index.function';

@Component({
  selector: 'app-cliente-listado',
  standalone: true,
  imports: [RouterLink, CardClienteComponent, CommonModule, FiltrarPersonaPipe, FormsModule],
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.css', '../../shared/css/header-views.css']
})
export class ClienteListadoComponent implements OnInit, AfterViewInit {

  searchText: string = '';
  personaList: Persona[] = [];
  personaListSub: Subscription = new Subscription();

  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private router: Router,
    private personaSrv: PersonaService,
    private notifySrv: NotifyService,
    private modalSrv: ModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.listarPersonas();
  }

  ngAfterViewInit(): void {
    this.breadcrumbSrv.removeAllBread();
  }

  private listarPersonas() {
    this.personaListSub = this.personaSrv.getAll().subscribe({
      next: (data) => {
        this.personaList = data;
      },
      error: (err) => {
        this.notifySrv.addNotification({ status: 'error', message: "Error del servidor" });
      }
    });
  }

  public crearCliente() {
    let modalConfig: Modal = {
      component: CrearClienteComponent,
      alertMessage: '¿Estas seguro que quieres cancelar?',
      title: 'Crear cliente',
    }
    this.modalSrv.openModal(this.viewContainerRef, modalConfig).subscribe({
      next: () => {
        this.listarPersonas()
      }
    });
  }

  public goTo(persona: Persona) {
    setLocalStorage('idPersona', persona)
    this.router.navigate(['/home/cliente/hc']);
  }
}
