import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Modal } from '../../../../core/index.model.system';
import { PersonaHc } from '../../../../core/index.model.api';
import { ModalService, NotifyService, ValueTransferService } from '../../../../core/index.service.triggers';
import { PersonaService } from '../../../../core/index.service.http';
import { CrearClienteComponent } from '../../../cliente-listado/components/crear-cliente/crear-cliente.component';

@Component({
  selector: 'app-card-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.css', '../../../../shared/css/btn.css']
})
export class CardPersonaComponent {
  @Input() persona: PersonaHc = {}
  @Output() isPersonaChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private modalSrv: ModalService,
    private viewContainerRef: ViewContainerRef,
    private valueSrv: ValueTransferService,
    private personaSrv: PersonaService,
    private notifySrv: NotifyService,
    private route: Router
  ) { }

  public limitarFechaNacimiento(): string {
    const date = this.persona.fecha_nac ? this.persona.fecha_nac.split('T')[0] : ''
    return date
  }

  public crearCliente() {
    this.valueSrv.emitPersona(this.persona)
    let modalConfig: Modal = {
      component: CrearClienteComponent,
      alertMessage: '¿Estas seguro que quieres cancelar?',
      title: 'Editar cliente',
    }
    this.modalSrv.openModal(this.viewContainerRef, modalConfig).subscribe(() => this.isPersonaChange.emit(true));
  }

  public deletePersona() {
    if (confirm('¿Estas seguro que quieres borrar esta persona?')) {
      const id = this.persona.idpersona ?? null;
      if (id === null) return;
      this.personaSrv.delete(id).subscribe({
        next: () => {
          this.notifySrv.addNotification('success', 'Persona borrada con exito')
          this.route.navigate(['/home/cliente'])
        },
        error: () => {
          this.notifySrv.addNotification('error','Error al borrar persona')
        }
      })
    }
  }
}
