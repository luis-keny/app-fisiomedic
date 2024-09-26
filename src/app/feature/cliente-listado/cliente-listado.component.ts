import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { CardClienteComponent } from './components/card-cliente/card-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';

import { Persona } from '../../core/index.model.api';
import { Modal } from '../../core/index.model.system';

import { setLocalStorage } from '../../core/index.function';
import { FiltrarPersonaPipe } from '../../core/index.pipe.main';
import { PersonaService } from '../../core/index.service.http';
import { BreadcrumbService, ModalService, NotifyService } from '../../core/index.service.triggers';

@Component({
  selector: 'app-cliente-listado',
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    RouterLink,
    CardClienteComponent,
    FiltrarPersonaPipe,
  ],
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
    private viewContainerRef: ViewContainerRef,
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
        this.notifySrv.addNotification('error',"Error del servidor" );
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
